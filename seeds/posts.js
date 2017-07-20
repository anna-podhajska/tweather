
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {id: 21, weather_id: 1, text: 'text', name: 'Anthony', location: 'Dublin'},
        {id: 22, weather_id: 1, text: 'text', name: 'Anna', location: 'Warsaw'},
        {id: 23, weather_id: 6, text: 'text', name: 'Usha', location: 'Blenheim'},
        {id: 24, weather_id: 2, text: 'text', name: 'Anna', location: 'Warsaw'},
        {id: 25, weather_id: 3, text: 'text', name: 'Usha', location: 'Blenheim'},
        {id: 26, weather_id: 3, text: 'text', name: 'Anna', location: 'Warsaw'},
        {id: 27, weather_id: 4, text: 'text', name: 'Usha', location: 'Blenheim'},
        {id: 28, weather_id: 5, text: 'text', name: 'Usha', location: 'Blenheim'},
        {id: 29, weather_id: 5, text: 'text', name: 'Anna', location: 'Warsaw'},
      ]);
    });
};
