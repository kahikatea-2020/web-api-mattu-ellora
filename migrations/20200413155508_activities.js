const newTable = 'activities'

exports.up = (knex) => {
  return knex.schema.createTable(newTable, table => {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
    table.string('name')
    table.string('frequency')
    table.string('level')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable(newTable)
}
