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

async function updateUser(username, field, value) {
  if (!username || !field || value === undefined) {
    throw new Error('Username, field, and value are required for updating a user.');
  }

  const validFields = ['username', 'email', 'password'];
  if (!validFields.includes(field)) {
    throw new Error('Invalid field for update.');
  }

  const updateQuery = {};
  if (field === 'password') {
    console.log('Hashing the new password before storing...');
    const hashedPassword = await bcrypt.hash(value, 10);
    updateQuery.password = hashedPassword;
  } else {
    updateQuery[field] = value;
  }

  try {
    // Check for conflicts with unique fields
    if (['username', 'email'].includes(field)) {
      const conflict = await userCollection.findOne({ [field]: value });
      if (conflict && conflict.username !== username) {
        throw new Error(`${field} already exists. Please choose a different one.`);
      }
    }

    // Update the user
    const result = await userCollection.updateOne(
      { username }, // Match by the provided username
      { $set: updateQuery }
    );

    if (result.modifiedCount === 0) {
      throw new Error('User not found or no changes made.');
    }

    // If username changed, fetch the new username
    const updatedUsername = field === 'username' ? value : username;

    // Fetch and return the updated user document
    const updatedUser = await userCollection.findOne({ username: updatedUsername });
    return updatedUser;
  } catch (err) {
    console.error('Error updating user:', err.message);
    throw err;
  }
}

async function createSubmission(submission) {
  await submissionCollection.insertOne(submission);
}

async function getSubmissions() {
  const cursor = submissionCollection.find({}, { sort: { votes: -1 } });
  return await cursor.toArray();
}

async function voteOnSubmission(text, voter) {
  if (!text || !voter) {
    console.error('Missing required parameters: text or voter');
    return null;
  }

  try {
    const submission = await submissionCollection.findOne({ text: text });
    if (!submission) {
      console.error('Submission not found for text:', text);
      return null;
    }

    const isAlreadyVoter = submission.voters.includes(voter);

    let updateQuery;
    if (isAlreadyVoter) {
      updateQuery = {
        $inc: { votes: -1 },
        $pull: { voters: voter },
      };
    } else {
      updateQuery = {
        $inc: { votes: 1 },
        $addToSet: { voters: voter },
      };
    }


    await submissionCollection.updateOne(
      { text: text },
      updateQuery
    );

    const updatedDocument = await submissionCollection.findOne({ text: text });
    return updatedDocument;
  } catch (err) {
    throw err;
  }
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
  updateUser,
};
