const bookshelf = require('../bookshelf');

require('./Role');
require('./Message');
require('./UserConversation');
require('./Entry');
require('./Comment');
require('./Friend');
class User extends bookshelf.Model {
  get tableName() {
    return 'users';
  }
  get hasTimestamps() {
    return true;
  }

  roles() {
    return this.belongsTo('Role', 'role_id');
  }

  sent_messages() {
    return this.hasMany('Message', 'sent_by');
  }

  conversations() {
    return this.hasMany('UserConversation', 'user_id');
  }

  created_entries() {
    return this.hasMany('Entry', 'created_by');
  }

  comments() {
    return this.hasMany('Comment', 'sent_by');
  }

  requests_sent() {
    return this.hasMany('Friend', 'requester');
  }

  invites_received() {
    return this.hasMany('Friend', 'invitee');
  }
}

module.exports = bookshelf.model('User', User);
