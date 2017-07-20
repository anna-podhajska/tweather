
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {id: 31, title: 'you must be kiddin', description: "I do not agree with you!", post_id: 21 },
        {id: 32, title: 'agree', description: "yeah ... same here!", post_id: 22},
        {id: 33, title: 'weather', description: "actually it is not bad", post_id: 23}
      ]);
    });
};
