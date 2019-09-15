exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('friends')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('friends').insert([
        { requester: 1, invitee: 2, accepted: true, responded: true },
        { requester: 1, invitee: 3, accepted: true, responded: true },
        { requester: 4, invitee: 1, accepted: false, responded: false },
        { requester: 2, invitee: 3, accepted: false, responded: true },
        { requester: 5, invitee: 1, accepted: true, responded: true },
        { requester: 3, invitee: 5, accepted: true, responded: true },
        { requester: 6, invitee: 1, accepted: false, responded: false },
        { requester: 3, invitee: 2, accepted: false, responded: false },
        { requester: 7, invitee: 1, accepted: false, responded: false },
      ]);
    });
};
