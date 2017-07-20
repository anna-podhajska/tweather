exports.up = function (knex, Promise) {
  return knex.schema.createTable('weather', function (table) {
    table.increments('id').primary()
    table.string('weather')
    table.string('description')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('weather')
}
