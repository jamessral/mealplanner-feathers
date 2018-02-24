const assert = require('assert');
const app = require('../../src/app');

describe('\'MealPlan\' service', () => {
  it('registered the service', () => {
    const service = app.service('meal-plan');

    assert.ok(service, 'Registered the service');
  });
});
