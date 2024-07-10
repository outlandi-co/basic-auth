const express = require('express');
const { User } = require('./models');
const basicAuth = require('./middleware/basic');

const router = express.Router();

router.post('/signup', async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (e) {
    next(e);
  }
});

router.post('/signin', basicAuth, (req, res) => {
  res.status(200).json(req.user);
});

module.exports = router;
