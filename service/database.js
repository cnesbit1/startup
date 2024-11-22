const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('Cluster0');
const userCollection = db.collection('user');
const submissionCollection = db.collection('submission');

(async function testConnection() {
  try {
    await client.connect();
    await db.command({ ping: 1 });
    console.log('Connected to MongoDB');
  } catch (ex) {
    console.error(`Unable to connect to database: ${ex.message}`);
    process.exit(1);
  }
})();

// Functions for user management
async function getUserByEmail(email) {
  return await userCollection.findOne({ email });
}

async function getUserByUsername(username) {
  return await userCollection.findOne({ username });
}

async function getUserByToken(token) {
  return await userCollection.findOne({ token });
}

async function createUser(username, email, password) {
  const passwordHash = await bcrypt.hash(password, 10);
  const user = {
    username,
    email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);
  return user;
}

async function updateUserToken(username, token) {
  return await userCollection.updateOne({ username }, { $set: { token } });
}

// Functions for submission management (unchanged)
async function createSubmission(submission) {
  await submissionCollection.insertOne(submission);
}

async function getSubmissions() {
  const cursor = submissionCollection.find({}, { sort: { votes: -1 } });
  return await cursor.toArray();
}

async function voteOnSubmission(text, increment = 1) {
  const result = await submissionCollection.findOneAndUpdate(
    { text },
    { $inc: { votes: increment } },
    { returnDocument: 'after' }
  );
  return result.value;
}

async function clearAllData() {
  await userCollection.deleteMany({});
  await submissionCollection.deleteMany({});
}

// Exports
module.exports = {
  getUserByEmail,
  getUserByUsername,
  getUserByToken,
  createUser,
  updateUserToken,
  createSubmission,
  getSubmissions,
  voteOnSubmission,
  clearAllData,
};
