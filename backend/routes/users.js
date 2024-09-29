const express = require("express");
const router = express.Router();
const User = require("../models/User");

// @route   GET /api/users
// @desc    Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   POST /api/users
// @desc    Add a new user
router.post("/", async (req, res) => {
  const { name, email, password_hash, user_type, address, contact_number } = req.body;

  try {
    let user = new User({
      name,
      email,
      password_hash,
      user_type,
      address,
      contact_number,
    });

    await user.save();
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
