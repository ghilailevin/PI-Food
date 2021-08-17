/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Recipe, conn } = require('../../src/db.js');

const agent = session(app);
const recipe = {
  name: 'Sopa de brocoli con queso',
};

describe('GET /recipes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
  }));
  describe('GET /recipes', () => {
    it('debe responder 200', () =>
      agent.get('/recipes/').expect(200)
    );
  });
});
