// Initializes the `MealPlan` service on path `/meal-plan`
const createService = require('feathers-knex');
const createModel = require('../../models/meal-plan.model');
const hooks = require('./meal-plan.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'meal-plan',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/meal-plan', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('meal-plan');

  service.hooks(hooks);
};
