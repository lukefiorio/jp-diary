exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('comments').insert([
        {
          entry_id: 1,
          sent_by: 4,
          body: 'howzit unko pidign, i think you just need to add an "o" to the end of every word.',
        },
        { entry_id: 1, sent_by: 1, body: 'oh forreal? tanks ah' },
        { entry_id: 2, sent_by: 3, body: 'are you even a real captain' },
        {
          entry_id: 2,
          sent_by: 2,
          body: 'dont test me!',
        },
        { entry_id: 2, sent_by: 3, body: 'frosted flakes are the best' },
        { entry_id: 3, sent_by: 4, body: 'wow this is going to be useful' },
        {
          entry_id: 5,
          sent_by: 1,
          body:
            'cheee hee brah I get the same way after pounding one Zippys Family Pak with 20 piece chicken and 2 gallon chili vat. best to strap in and get ready for the rodeo.',
        },
        { entry_id: 5, sent_by: 4, body: 'it feels like there is a dark and terrible evil brewing inside me' },
        {
          entry_id: 6,
          sent_by: 5,
          body: '失礼だよ！',
        },
        {
          entry_id: 6,
          sent_by: 2,
          body: 'what did you just call me',
        },
      ]);
    });
};
