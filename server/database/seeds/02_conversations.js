exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('conversations')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('conversations').insert([{ seed_id: 1 }, { seed_id: 2 }, { seed_id: 3 }]);
    });
};
