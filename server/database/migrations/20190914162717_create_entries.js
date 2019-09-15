exports.up = function(knex, Promise) {
  return knex.schema.createTable('entries', (table) => {
    table.increments();
    table
      .integer('created_by')
      .notNull()
      .references('id')
      .inTable('users');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('entries');
};
