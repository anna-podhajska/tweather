
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('posts', function (table) {
    table.increments('id').primary();
    table.integer('weather_id');
    table.string('text');
    table.string('name');
    table.string('location')
  })
};

exports.down = function(knex, Promise) {

  return knex.schema.dropTableIfExists('posts')

};
