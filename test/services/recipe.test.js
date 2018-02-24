const assert = require('assert');
const app = require('../../src/app');

describe('\'Recipe\' service', () => {
  it('registered the service', () => {
    const service = app.service('recipe');

    assert.ok(service, 'Registered the service');
  });
});
