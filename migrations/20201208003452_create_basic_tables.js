
exports.up = function (knex) {
  return knex.schema
    .createTable('CLIENTS', function (table) {
      table.increments('ID')
      table.string('NAME', 500).notNullable()
      table.boolean('ACTIVE').default(false)
      table.string('API_KEY', 50).notNullable()
    })
    .createTable('RESERVATION_PRODUCTS', function (table) {
      table.increments('ID')
      table.integer('ID_CLIENT').notNullable()
      table.string('TITLE', 200).notNullable()
      table.boolean('ACTIVE').default(false)
      table.string('REFERENCE', 100)
      table.string('DESCRIPTION', 2000)
      table.foreign('ID_CLIENT').references('CLIENTS.ID')
    })
    .createTable('RESERVATION_STATUS', function (table) {
      table.increments('ID')
      table.string('NAME', 100).notNullable()
    })
    .createTable('RESERVATIONS', function (table) {
      table.increments('ID')
      table.integer('ID_RESERVATION_PRODUCT').notNullable()
      table.string('OWNER', 100).notNullable()
      table.integer('ID_RESERVATION_STATUS').notNullable()
      table.datetime('REGISTER_DATE').defaultTo(knex.fn.now(6))
      table.datetime('FINISH_DATE')
      table.foreign('ID_RESERVATION_PRODUCT').references('RESERVATION_PRODUCTS.ID')
      table.foreign('ID_RESERVATION_STATUS').references('RESERVATION_STATUS.ID')
    })
    .createTable('RESERVATION_HISTORY', function (table) {
      table.increments('ID')
      table.integer('ID_RESERVATION').notNullable()
      table.integer('ID_RESERVATION_STATUS').notNullable()
      table.datetime('DATE').defaultTo(knex.fn.now(6))
      table.text('REGISTER')
      table.foreign('ID_RESERVATION').references('RESERVATIONS.ID')
      table.foreign('ID_RESERVATION_STATUS').references('RESERVATION_STATUS.ID')
    })
}

exports.down = function (knex) {
  return knex.schema
    .dropTable('RESERVATION_HISTORY')
    .dropTable('RESERVATIONS')
    .dropTable('RESERVATION_STATUS')
    .dropTable('RESERVATION_PRODUCTS')
    .dropTable('CLIENTS')
}
