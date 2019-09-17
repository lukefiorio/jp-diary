'use strict';

const express = require('express');
const router = express.Router();
const passport = require('passport');

router.route('/').get((req, res) => {
  return res.send('Log-in Form');
});

router.post('/', passport.authenticate('local'), (req, res) => {
  console.log('req.user:', req.user);
  return res.json({ id: req.user.id, username: req.user.username });
});

module.exports = router;
