'use strict';

const express = require('express');
const router = express.Router();
const User = require('../database/models/User');

router
  .route('/')
  // fetches all users
  .get((req, res) => {
    new User({ id: req.user.id })
      .fetch({ withRelated: ['roles'] })
      .then((result) => {
        console.log(result.toJSON());
        return res.send(result.toJSON());
      })
      .catch((err) => {
        console.log('error', err);
      });
  });

module.exports = router;
