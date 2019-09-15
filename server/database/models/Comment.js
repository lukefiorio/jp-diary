const bookshelf = require('../bookshelf');

require('./User');
require('./Entry');
class Comment extends bookshelf.Model {
  get tableName() {
    return 'comments';
  }

  get hasTimestamps() {
    return true;
  }

  entries() {
    return this.belongsTo('Entry', 'entry_id');
  }

  created_by() {
    return this.belongsTo('User', 'sent_by');
  }
}

module.exports = bookshelf.model('Comment', Comment);
