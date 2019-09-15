exports.up = function(knex, Promise) {
  return knex.schema.createTable('entries_languages', (table) => {
    table.increments();
    table
      .integer('entry_id')
      .notNull()
      .references('id')
      .inTable('entries');
    table.string('language', 50).notNull();
    table.string('body', 5000).notNull();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('entries_languages');
};
