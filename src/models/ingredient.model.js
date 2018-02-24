/* eslint-disable no-console */

module.exports = function (app) {
  const db = app.get('knexClient')
  const tableName = 'ingredient'
  db.schema.hasTable(tableName).then(exists => {
    if(!exists) {
      db.schema.createTable(tableName, table => {
        table.increments('id')
        table.string('name').notNullable()
        table.text('description')
        table.integer('price')
        table.foreign('user_id').references('user.id')
      })
        .then(() => console.log(`Created ${tableName} table`))
        .catch(e => console.error(`Error creating ${tableName} table`, e))
    }
  })

  return db
}
