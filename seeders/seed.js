const connection = require('../config/connection');
const { Thought, User } = require('../models');
const {thoughtSeed, userSeed } = require("../seeders/data")


connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await Thought.deleteMany({});
  await User.deleteMany({});

  await Thought.collection.insertMany(thoughtSeed);
  console.log("seed.js Thought seeded")
  await User.collection.insertMany(userSeed);
  console.log("seed.js User seeded")

  process.exit(0);
});
