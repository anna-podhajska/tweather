
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('weather').del()
    .then(function () {
      // Inserts seed entries
      return knex('weather').insert([
        {id: 1, weather: 'sunny', description: ''},
        {id: 2, weather: 'rainy', description: ''},
        {id: 3, weather: 'chilly', description: ''},
        {id: 4, weather: 'windy', description: ''},
        {id: 5, weather: 'humid', description: ''},
        {id: 6, weather: 'overcast', description: ''}
      ]);
    });
};
