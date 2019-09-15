'use strict';

const express = require('express');
const router = express.Router();
const User = require('../database/models/User');

router
  .route('/')
  // fetches all users
  .get((req, res) => {
    new User()
      .fetchAll({ withRelated: ['roles'] })
      .then((result) => {
        return res.send(result.toJSON());
      })
      .catch((err) => {
        console.log('error', err);
      });
  });

module.exports = router;
