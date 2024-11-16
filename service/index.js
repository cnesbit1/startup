const express = require('express');
const uuid = require('uuid');
const path = require('path');
const axios = require('axios');
const app = express();

require('dotenv').config();
console.log('All Environment Variables:', process.env);

const apiKey = process.env.DATAWRAPPER_API_KEY;
console.log('Datawrapper API Key:', apiKey);

let users = {};
let submissions = [];
let currentUsers = {};

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());

app.use(express.static('public'));

const apiRouter = express.Router();
app.use('/api', apiRouter);

apiRouter.post('/auth/create', (req, res) => {
  console.log('Request body:', req.body);

  const { username, password, email } = req.body;

  if (users[username]) {
    console.log('Username already exists');
    res.status(409).send({ msg: 'Username already exists' });
  } else {
    const token = uuid.v4();
    const newUser = {
      username,
      email,
      password,
      token
    };

    users[username] = newUser;
    currentUsers[token] = newUser;

    console.log('New user created and logged in:', newUser);
    res.send({
      token: newUser.token,
      username: newUser.username,
      email: newUser.email,
      password: newUser.password,
    });
  }
});

apiRouter.post('/auth/login', (req, res) => {
  const { username, password } = req.body;
  const user = users[username];

  if (user && password === user.password) {
    const token = uuid.v4();
    user.token = token;
    currentUsers[token] = user;

    res.send({
      token: user.token,
      username: user.username,
      email: user.email,
      password: user.password,
    });
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

apiRouter.delete('/auth/logout', (req, res) => {
  const token = req.headers['authorization'];
  const user = currentUsers[token];

  if (user) {
    delete currentUsers[token];
    delete user.token;
    res.status(200).send({ msg: 'Logged out successfully' });
  } else {
    res.status(401).send({ msg: 'Unauthorized or already logged out' });
  }
});

function authenticate(req, res, next) {
  const token = req.headers['authorization'];
  const user = currentUsers[token];

  if (user) {
    req.user = user;
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
}

apiRouter.get('/submissions', (_req, res) => {
  res.send(submissions);
});

apiRouter.post('/submissions', authenticate, (req, res) => {
  const { text, votes = 0 } = req.body;

  const existingSubmission = submissions.find((sub) => sub.text === text);
  if (existingSubmission) {
    return res.status(409).send({ msg: 'Submission already exists' });
  }

  const newSubmission = {
    text,
    votes,
    user: req.user.username,
    voters: []
  };

  submissions.push(newSubmission);
  submissions.sort((a, b) => b.votes - a.votes);
  res.send(submissions);
});

apiRouter.post('/submissions/vote', authenticate, (req, res) => {
  const { text } = req.body;

  const submission = submissions.find((sub) => sub.text === text);
  if (submission) {
    const voterIndex = submission.voters.indexOf(req.user.username);
    if (voterIndex !== -1) {
      submission.votes -= 1;
      submission.voters.splice(voterIndex, 1);
    } else {
      submission.votes += 1;
      submission.voters.push(req.user.username);
    }

    submissions.sort((a, b) => b.votes - a.votes);
    return res.send(submissions);
  } else {
    return res.status(404).send({ msg: 'Submission not found' });
  }
});


apiRouter.put('/user/update', authenticate, (req, res) => {
  const { field, value } = req.body;
  const user = req.user;

  if (
    Object.values(users).some(
      (u) => u[field] === value && u.username !== user.username
    )
  ) {
    return res.status(409).send({ msg: `${field} already exists. Please choose a different one.` });
  }

  const previousUsername = user.username;

  user[field] = value;

  if (field === 'username') {
    delete users[previousUsername];
    users[user.username] = user;
  } else {
    users[user.username] = user;
  }

  res.send({ msg: 'User updated successfully', user });
});

apiRouter.get('/chart/data', (req, res) => {
  const chartData = submissions.map((submission, index) => ({
    Place: index + 1,
    Text: submission.text,
    Votes: submission.votes,
  }));

  res.json(chartData);
});

apiRouter.post('/chart/create', async (req, res) => {
  try {
    const { title } = req.body;

    console.log('Creating chart with title:', title);
    console.log(apiKey);
    // Step 1: Create chart
    const chartResponse = await axios.post(
      'https://api.datawrapper.de/v3/charts',
      {
        title: title || 'Voting Results',
        type: 'd3-bars',
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    console.log('Chart creation response:', chartResponse.data);

    const chartId = chartResponse.data.id;

    // Step 2: Upload data
    const chartData = [
      'Text,Votes',
      ...submissions.map(submission => `${submission.text},${submission.votes}`)
    ].join('\n');

    console.log('Uploading chart data:\n', chartData);

    await axios.put(
      `https://api.datawrapper.de/v3/charts/${chartId}/data`,
      chartData,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'text/csv',
        },
      }
    );

    console.log('Data uploaded successfully.');

    // Step 3: Publish chart
    const publishResponse = await axios.post(
      `https://api.datawrapper.de/v3/charts/${chartId}/publish`,
      {},
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    console.log('Chart published successfully:', publishResponse.data);

    const chartUrl = publishResponse.data.url;
    res.json({ chartUrl });
  } catch (error) {
    console.error('Error creating chart:', error.response?.data || error.message);
    res.status(500).json({ msg: 'Failed to create chart', error: error.message });
  }
});



apiRouter.delete('/clear', (req, res) => {
  users = {};
  currentUsers = {};
  submissions = [];
  
  res.send({ msg: 'All data cleared successfully' });
});

apiRouter.get('/debug/all', (req, res) => {
  res.send({
    users,
    currentUsers,
    submissions
  });
});

app.use((_req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '..', 'public') });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});