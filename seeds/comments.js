
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {id: 31, title: 'You must be kiddin!', description: "I do not agree with you!", post_id: 21 },
        {id: 32, title: 'Well ...', description: "It’s been raining so much in Los Angeles that the Chia Pet I threw in the garbage is now blocking my entire driveway.", post_id: 22},
        {id: 33, title: 'weather', description: "actually it is not bad", post_id: 23},
        {id: 34, title: 'Love it!', description: "love talking about the weather!", post_id: 24},
        {id: 35, title: 'weather', description: "actually it is not bad", post_id: 25},
        {id: 36, title: 'agree', description: "As we waited for a bus in the frosty weather, the woman next to me mentioned that she makes a lot of mistakes when texting in the cold.", post_id: 26},
        {id: 37, title: 'Storm here!', description: "Electricity is really just organized lightning.", post_id: 27},
        {id: 38, title: 'Love it!', description: "love talking about the weather!", post_id: 28}
      ]);
    });
};
