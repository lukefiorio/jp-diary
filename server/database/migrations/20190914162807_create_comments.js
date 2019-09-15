exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', (table) => {
    table.increments();
    table
      .integer('entry_id')
      .notNull()
      .references('id')
      .inTable('entries');
    table
      .integer('sent_by')
      .notNull()
      .references('id')
      .inTable('users');
    table.string('body', 1000).notNull();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
