
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {id: 21, weather_id: 1, text: 'text', name: 'Anthony', location: 'Dublin'},
        {id: 22, weather_id: 1, text: 'text', name: 'Anna', location: 'Warsaw'},
        {id: 23, weather_id: 6, text: 'text', name: 'Usha', location: 'Blenheim'},
      ]);
    });
};
