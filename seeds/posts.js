
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {id: 21, weather_id: 1, text: 'the weather is great!', name: 'Anthony', location: 'Dublin', date: "1/07/2017"},
        {id: 22, weather_id: 1, text: 'love the snow!', name: 'Anna', location: 'Warsaw', date: "2/07/2017"},
        {id: 23, weather_id: 6, text: 'not too bad', name: 'Usha', location: 'Blenheim', date: "3/07/2017"},
        {id: 24, weather_id: 2, text: 'dredfull', name: 'Anna', location: 'Warsaw', date: "4/07/2017"},
        {id: 25, weather_id: 3, text: 'I like it', name: 'Annelise', location: 'Wellington', date: "4/07/2017"},
        {id: 26, weather_id: 3, text: 'great!', name: 'Anna', location: 'Warsaw', date: "8/07/2017"},
        {id: 27, weather_id: 4, text: 'I like how it is today!', name: 'Usha', location: 'Blenheim', date: "7/07/2017"},
        {id: 28, weather_id: 5, text: 'no comment', name: 'Annelise', location: 'Wellington', date: "6/07/2017"},
        {id: 29, weather_id: 5, text: 'waiting for sunny weekend', name: 'Anna', location: 'Warsaw', date: "10/07/2017"},
      ]);
    });
};
