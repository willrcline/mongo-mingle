const User = require('../models/User');

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleUser(req, res) {
    console.log("/api/users/:id getSingleUser()__________")
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select('-__v')
        .populate('thought');

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new user
  async createUser(req, res) {
    try {
      const dbUserData = await User.create(req.body);
      res.json(dbUserData);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { username: req.body.username },
      );
      res.status(200).json("updated user")
    } catch (err) {
      res.status(500).json(err)
    }
  },

  async deleteUser(req, res) {
    try {
      await User.deleteOne(
        { _id: req.params.userId }
      )
      res.status(200).json("deleted user")
    } catch (err) {
      res.status(500).json(err)
    }
  }
};
