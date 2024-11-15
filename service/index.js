const express = require('express');
const uuid = require('uuid');
const path = require('path');
const app = express();

// In-memory data storage (for demonstration purposes)
let users = {};           // Stores user data with username as the key
let submissions = [];      // Stores submissions
let currentUsers = {};     // Tracks logged-in users by token

// Set up the port
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// Middleware for JSON body parsing
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname, '..')));

// Set up an API router
const apiRouter = express.Router();
app.use('/api', apiRouter);

// Route: Create a new user
apiRouter.post('/auth/create', (req, res) => {
  console.log('Request body:', req.body); // Log incoming data

  const { username, password, email } = req.body;

  if (users[username]) {
    console.log('Username already exists');
    res.status(409).send({ msg: 'Username already exists' });
  } else {
    const newUser = {
      username,
      email,
      password,
      token: uuid.v4()
    };
    users[username] = newUser;

    console.log('New user created:', newUser); // Log new user details
    res.send({ token: newUser.token, username: newUser.username, email: newUser.email});
  }
});

// Route: Log in an existing user
apiRouter.post('/auth/login', (req, res) => {
  const { username, password } = req.body;
  const user = users[username];

  if (user && password === user.password) {
    user.token = uuid.v4();
    currentUsers[user.token] = user; // Track the logged-in user by token
    res.send({ token: user.token, username: user.username, email: user.email }); // Send username and email
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

// Route: Log out a user
apiRouter.delete('/auth/logout', (req, res) => {
  const token = req.body.token;
  const user = currentUsers[token];

  if (user) {
    delete currentUsers[token]; // Remove user from currentUsers
    delete user.token;          // Remove token from user data
  }
  res.status(204).end();
});

// Middleware to verify if the user is authenticated
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

// Route: Get all submissions (public)
apiRouter.get('/submissions', (_req, res) => {
  res.send(submissions);
});

// Route: Submit a new submission (auth required)
apiRouter.post('/submissions', authenticate, (req, res) => {
  const newSubmission = {
    text: req.body.text,
    votes: req.body.votes || 0,
    user: req.user.username // Associate submission with username
  };
  submissions = updateSubmissions(newSubmission, submissions);
  res.send(submissions);
});

apiRouter.put('/user/update', authenticate, (req, res) => {
  const { field, value } = req.body;
  const user = req.user;

  // Prevent duplicate entries
  if (
    Object.values(users).some(
      (u) => u[field] === value && u.username !== user.username
    )
  ) {
    return res.status(409).send({ msg: `${field} already exists` });
  }

  // Update the user field
  user[field] = value;
  users[user.username] = user; // Update the in-memory database

  res.send({ msg: 'User updated successfully', user });
});

apiRouter.delete('/clear', (req, res) => {
  // Clear all in-memory data
  users = {};
  currentUsers = {};
  submissions = [];
  
  // Send confirmation
  res.send({ msg: 'All data cleared successfully' });
});

apiRouter.get('/debug/all', (req, res) => {
  res.send({
    users,
    currentUsers,
    submissions
  });
});

// Catch-all route for serving the front-end (React app)
app.use((_req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '..', 'public') });
});

// Start the Express server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Helper function to update the submissions array
function updateSubmissions(newSubmission, submissions) {
  let found = false;
  for (const [i, prevSubmission] of submissions.entries()) {
    if (newSubmission.votes > prevSubmission.votes) {
      submissions.splice(i, 0, newSubmission);
      found = true;
      break;
    }
  }

  if (!found) {
    submissions.push(newSubmission);
  }

  // Limit to top 10 submissions
  if (submissions.length > 10) {
    submissions.length = 10;
  }

  return submissions;
}
