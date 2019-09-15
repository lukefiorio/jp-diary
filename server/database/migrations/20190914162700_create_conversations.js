exports.up = function(knex, Promise) {
  return knex.schema.createTable('conversations', (table) => {
    table.increments();
    table.integer('seed_id');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('conversations');
};
