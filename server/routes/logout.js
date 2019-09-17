'use strict';

const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
  req.logout();
  console.log('logout');
  return res.send({ status: 'Success' });
});

module.exports = router;
