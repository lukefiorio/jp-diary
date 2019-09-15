const bookshelf = require('../bookshelf');

require('./Entry');
class EntryLanguage extends bookshelf.Model {
  get tableName() {
    return 'entry_languages';
  }

  get hasTimestamps() {
    return true;
  }

  entries() {
    return this.belongsTo('Entry', 'entry_id');
  }
}

module.exports = bookshelf.model('EntryLanguage', EntryLanguage);
