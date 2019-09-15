const bookshelf = require('../bookshelf');

require('./User');
class Friend extends bookshelf.Model {
  get tableName() {
    return 'friends';
  }

  get hasTimestamps() {
    return true;
  }

  requesters() {
    return this.belongsTo('User', 'requester');
  }

  invitees() {
    return this.belongsTo('User', 'invitee');
  }
}

module.exports = bookshelf.model('Friend', Friend);
