'use strict';

const express = require('express');
const router = express.Router();
const Entry = require('../database/models/Entry');
const EntryLanguage = require('../database/models/EntryLanguage');

router.route('/').post((req, res) => {
  new Entry()
    .save({ created_by: req.user.id })
    .then((result) => {
      const entryLanguages = req.body.subEntries;
      entryLanguages.forEach((subEntry) => {
        // update this with real data to pipe in
        (subEntry.entry_id = result.attributes.id), (subEntry.language = 'japanese'), (subEntry.body = 'entry body');
      });
      return EntryLanguage.collection(entryLanguages).invokeThen('save');
    })
    .then(() => {
      console.log('Entry posted');
      return res.send('Entry successfully posted');
    })
    .catch((err) => {
      console.log('error:', err);
      return res.status(500).send('Server error');
    });
});

module.exports = router;
