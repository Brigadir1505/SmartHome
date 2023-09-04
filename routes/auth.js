
const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (user) {
    req.session.user = user; 
    res.redirect('/dashboard'); 
  } else {
    res.redirect('/login');
  }
});

module.exports = router;
