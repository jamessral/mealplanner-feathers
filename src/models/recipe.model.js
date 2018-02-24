/* eslint-disable no-console */

module.exports = function (app) {
  const db = app.get('knexClient')
  const tableName = 'recipe'
  db.schema.hasTable(tableName).then(exists => {
    if(!exists) {
      db.schema.createTable(tableName, table => {
        table.increments('id')
        table.string('name')
        table.text('description')
        table.foreign('user_id').references('user.id')
        table.foreign('meal_plan_id').references('meal_plan.id')
      })
        .then(() => console.log(`Created ${tableName} table`))
        .catch(e => console.error(`Error creating ${tableName} table`, e))
    }
  })

  return db
}
