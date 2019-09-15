exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('entries_languages')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('entries_languages').insert([
        {
          entry_id: 1,
          language: 'English',
          body: 'Today was fun!',
        },
        {
          entry_id: 1,
          language: '日本語',
          body: '今日は楽しかったです！',
        },
        {
          entry_id: 2,
          language: 'English',
          body: 'I ate a lot of ice cream today... I feel sick',
        },
        {
          entry_id: 2,
          language: '日本語',
          body: 'アイスクリームを食べすぎたから、気持ちが悪い。。。',
        },
        {
          entry_id: 3,
          language: 'English',
          body: 'It is just so much easier to write in English',
        },
        {
          entry_id: 4,
          language: 'English',
          body: 'Tomorrow I will write in Japanese',
        },
        {
          entry_id: 4,
          language: '日本語',
          body: '明日、日本語で書きます',
        },
        {
          entry_id: 5,
          language: 'English',
          body: 'Will anyone read this?',
        },
        {
          entry_id: 5,
          language: '日本語',
          body: 'だれか読みますか。',
        },
        {
          entry_id: 6,
          language: '日本語',
          body: '日本語だけ好きですよ！',
        },
      ]);
    });
};
