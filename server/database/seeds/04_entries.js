exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('entries')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('entries').insert([
        {
          created_by: 1,
        },
        {
          created_by: 2,
        },
        {
          created_by: 3,
        },
        {
          created_by: 3,
        },
        {
          created_by: 4,
        },
        {
          created_by: 7,
        },
      ]);
    });
};
