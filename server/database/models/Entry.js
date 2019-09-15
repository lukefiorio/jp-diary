const bookshelf = require('../bookshelf');

require('./User');
require('./Comment');
require('./EntryLanguage');
class Entry extends bookshelf.Model {
  get tableName() {
    return 'entries';
  }

  get hasTimestamps() {
    return true;
  }

  created_by() {
    return this.belongsTo('User', 'created_by');
  }

  comments() {
    return this.hasMany('Comment', 'entry_id');
  }

  entry_languages() {
    return this.hasMany('EntryLanguage', 'entry_id');
  }
}

module.exports = bookshelf.model('Entry', Entry);
