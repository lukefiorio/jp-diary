const bcrypt = require('bcryptjs');
const saltRounds = 12;

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          active: true,
          private_mode: false,
          role_id: 1,
          username: 'admin01',
          password: bcrypt.hashSync('password', saltRounds),
          name: 'Unko Pidgin',
          email: 'hobrah@cuzzin.com',
          profile_image_url: 'https://www.mauiinformationguide.com/img/_maui/hawaiian-pidgin.jpg',
        },
        {
          active: true,
          private_mode: false,
          role_id: 1,
          username: 'admin02',
          password: bcrypt.hashSync('password', saltRounds),
          name: 'Captain Crunch',
          email: 'crunchetizemyshiz@kellogs.com',
          profile_image_url:
            'http://296y67419hmo2gej4j232hyf-wpengine.netdna-ssl.com/wp-content/uploads/2013/06/captain-crunch-face.gif',
        },
        {
          active: true,
          private_mode: false,
          role_id: 2,
          username: 'mod01',
          password: bcrypt.hashSync('password', saltRounds),
          name: 'Franklin the Turtle',
          email: 'takethings@slow.com',
          profile_image_url: 'https://i.pinimg.com/originals/c8/5e/8e/c85e8e04a643a6f8d39a215ce866b73f.jpg',
        },
        {
          active: true,
          private_mode: false,
          role_id: 2,
          username: 'mod02',
          password: bcrypt.hashSync('password', saltRounds),
          name: 'Yakko Warner',
          email: 'animaniacs@warnerbros.com',
          profile_image_url:
            'https://vignette.wikia.nocookie.net/animaniacs/images/6/68/Yakko_Warner.png/revision/latest?cb=20130118164439',
        },
        {
          active: true,
          private_mode: false,
          role_id: 3,
          username: 'user01',
          password: bcrypt.hashSync('password', saltRounds),
          name: 'Garfield',
          email: 'lasagna@mondays.com',
          profile_image_url: 'https://images.halloweencostumes.com/products/5644/1-1/child-garfield-costume.jpg',
        },
        {
          active: false,
          private_mode: false,
          role_id: 3,
          username: 'user02',
          password: bcrypt.hashSync('password', saltRounds),
          name: 'One Punch Man',
          email: 'pushups@situps.com',
          profile_image_url:
            'https://img1.ak.crunchyroll.com/i/spire2/b07e7c6942d8d007fdf3bc2c9838322b1559849807_full.png',
        },
        {
          active: true,
          private_mode: true,
          role_id: 3,
          username: 'user03',
          password: bcrypt.hashSync('password', saltRounds),
          name: 'Thay nose',
          email: 'thaynosebear@balance.com',
          profile_image_url: 'https://cdn.mos.cms.futurecdn.net/G7WyGoFb5oBptgkzTxrBFW.jpg',
        },
      ]);
    });
};
