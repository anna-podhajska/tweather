exports.up = function (knex, Promise) {
  return knex.schema.createTable('comments', function (table) {
    table.increments('id').primary()
    table.string('title')
    table.string('description')
    table.string('post_id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('comments')
}
