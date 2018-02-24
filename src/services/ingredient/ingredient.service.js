// Initializes the `Ingredient` service on path `/ingredient`
const createService = require('feathers-knex')
const createModel = require('../../models/ingredient.model')
const hooks = require('./ingredient.hooks')

module.exports = function (app) {
  const Model = createModel(app)
  const paginate = app.get('paginate')

  const options = {
    name: 'ingredient',
    Model,
    paginate,
  }

  // Initialize our service with any options it requires
  app.use('/ingredient', createService(options))

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('ingredient')

  service.hooks(hooks)
}
