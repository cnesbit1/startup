const express = require('express');
const path = require('path');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
require('dotenv').config();

const { WebSocketServer } = require('ws');
const http = require('http');
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
  console.log('WebSocket connection established.');

  ws.on('message', (message) => {
    console.log('Received:', message);
  });

  ws.send(JSON.stringify({ type: 'info', message: 'Connected to WebSocket server.' }));
});

function broadcast(data) {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data));
    }
  });
}

const {
  getUserByEmail,
  getUserByUsername,
  getUserByToken,
  createUser,
  updateUserToken,
  createSubmission,
  getSubmissions,
  voteOnSubmission,
  clearAllData,
  updateUser,
} = require('./database');

const app = express();
const port = process.argv.length > 2 ? process.argv[2] : 4000;
const apiKey = process.env.DATAWRAPPER_API_KEY;

app.use(express.json());
app.use(express.static('public'));

const apiRouter = express.Router();
app.use('/api', apiRouter);

console.log('Datawrapper API Key:', apiKey);

// Middleware: Authenticate user by token
async function authenticate(req, res, next) {
  const token = req.headers['authorization'];
  const user = await getUserByToken(token);

  if (user) {
    req.user = user;
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
}

// User Authentication Routes
apiRouter.post('/auth/create', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await getUserByUsername(username);
    if (existingUser) {
      return res.status(409).send({ msg: 'Username already exists' });
    }

    const existingEmail = await getUserByEmail(email);
    if (existingEmail) {
      return res.status(409).send({ msg: 'Email already exists' });
    }

    const newUser = await createUser(username, email, password);
    res.send({
      token: newUser.token,
      username: newUser.username,
      email: newUser.email,
    });
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(500).send({ msg: 'Failed to create user' });
  }
});

apiRouter.post('/auth/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await getUserByUsername(username);
    if (user && await bcrypt.compare(password, user.password)) {
      const token = uuidv4();
      await updateUserToken(username, token);
      res.send({
        token,
        username: user.username,
        email: user.email,
      });
    } else {
      res.status(401).send({ msg: 'Invalid username or password' });
    }
  } catch (err) {
    console.error('Error logging in:', err);
    res.status(500).send({ msg: 'Login failed' });
  }
});

apiRouter.delete('/auth/logout', async (req, res) => {
  const token = req.headers['authorization'];

  try {
    const user = await getUserByToken(token);
    if (user) {
      await updateUserToken(user.username, null);
      res.status(200).send({ msg: 'Logged out successfully' });
    } else {
      res.status(401).send({ msg: 'Unauthorized or already logged out' });
    }
  } catch (err) {
    console.error('Error logging out:', err);
    res.status(500).send({ msg: 'Logout failed' });
  }
});

apiRouter.put('/user/update', authenticate, async (req, res) => {
  const { field, value } = req.body;
  const user = req.user;

  if (!field || !value) {
    console.warn('Missing field or value in request body');
    return res.status(400).send({ msg: 'Field and value are required for updates.' });
  }

  try {
    const updatedUser = await updateUser(user.username, field, value);

    res.send({ msg: 'User updated successfully.', user: updatedUser });
  } catch (err) {
    console.error('Error updating user:', err.message);
    res.status(err.message.includes('already exists') ? 409 : 500).send({ msg: err.message });
  }
});

apiRouter.get('/submissions', async (_req, res) => {
  try {
    const submissions = await getSubmissions();
    res.send(submissions);
  } catch (err) {
    console.error('Error fetching submissions:', err);
    res.status(500).send({ msg: 'Failed to fetch submissions' });
  }
});

apiRouter.post('/submissions', authenticate, async (req, res) => {
  const { text } = req.body;

  try {
    const submissions = await getSubmissions();
    if (submissions.some((sub) => sub.text === text)) {
      return res.status(409).send({ msg: 'Submission already exists' });
    }

    const newSubmission = {
      text,
      votes: 0,
      user: req.user.username,
      voters: [],
    };

    await createSubmission(newSubmission);
    const updatedSubmissions = await getSubmissions();
    res.send(updatedSubmissions);
  } catch (err) {
    console.error('Error creating submission:', err);
    res.status(500).send({ msg: 'Failed to create submission' });
  }
});

apiRouter.post('/submissions/vote', authenticate, async (req, res) => {  
  const { text } = req.body;
  const voter = req.user?.username;

  if (!voter) {
    console.warn('Unauthorized access attempt: voter is undefined');
    return res.status(401).send({ msg: 'Unauthorized. User not authenticated.' });
  }

  try {
    const updatedSubmission = await voteOnSubmission(text, voter);
    if (updatedSubmission) {      
      const updatedSubmissions = await getSubmissions();
      res.send(updatedSubmissions);
    } else {
      console.warn(`Submission not found for text: "${text}"`);
      res.status(404).send({ msg: 'Submission not found' });
    }
  } catch (err) {
    console.error('Error during vote operation:', err);
    res.status(500).send({ msg: 'Failed to vote' });
  }
});

apiRouter.get('/chart/data', async (_req, res) => {
  try {
    const submissions = await getSubmissions();
    const chartData = submissions.map((submission, index) => ({
      Place: index + 1,
      Text: submission.text,
      Votes: submission.votes,
    }));
    res.json(chartData);
  } catch (err) {
    console.error('Error generating chart data:', err);
    res.status(500).send({ msg: 'Failed to generate chart data' });
  }
});

apiRouter.post('/chart/create', async (req, res) => {
  try {
    const { title } = req.body;
    const submissions = await getSubmissions();

    const chartResponse = await axios.post(
      'https://api.datawrapper.de/v3/charts',
      { title: title || 'Voting Results', type: 'd3-bars' },
      { headers: { Authorization: `Bearer ${apiKey}` } }
    );

    const chartId = chartResponse.data.id;
    const chartData = [
      'Text,Votes',
      ...submissions.map((submission) => `${submission.text},${submission.votes}`),
    ].join('\n');

    await axios.put(
      `https://api.datawrapper.de/v3/charts/${chartId}/data`,
      chartData,
      { headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'text/csv' } }
    );

    const publishResponse = await axios.post(
      `https://api.datawrapper.de/v3/charts/${chartId}/publish`,
      {},
      { headers: { Authorization: `Bearer ${apiKey}` } }
    );

    res.json({ chartUrl: publishResponse.data.url });
  } catch (err) {
    console.error('Error creating chart:', err);
    res.status(500).send({ msg: 'Failed to create chart', error: err.message });
  }
});

apiRouter.delete('/clear', async (_req, res) => {
  try {
    await clearAllData();
    res.send({ msg: 'All data cleared successfully' });
  } catch (err) {
    console.error('Error clearing data:', err);
    res.status(500).send({ msg: 'Failed to clear data' });
  }
});

apiRouter.get('/debug/all', async (_req, res) => {
  try {
    const users = await userCollection.find().toArray();
    const submissions = await getSubmissions();
    res.send({ users, submissions });
  } catch (err) {
    console.error('Error fetching debug data:', err);
    res.status(500).send({ msg: 'Failed to fetch debug data' });
  }
});

app.use((_req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '..', 'public') });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
