const { Recipe, conn } = require('../../src/db.js');
const { expect } = require('chai');

// describe('Recipe model', () => {
//   before(() => conn.authenticate()
//     .catch((err) => {
//       console.error('Unable to connect to the database:', err);
//     }));
//   describe('Validators', () => {
//     beforeEach(() => Recipe.sync({ force: true }));
//     describe('name', () => {
//       it('should throw an error if name is null', (done) => {
//         Recipe.create({})
//           .then(() => done(new Error('It requires a valid name')))
//           .catch(() => done());
//       });
//       it('should work when its a valid name', () => {
//         Recipe.create({ name: 'Milanesa a la napolitana' });
//       });
//     });
//   });
// });

describe('Validators', () => {
    beforeEach(() => Recipe.sync({ force: true }));
    describe('name', () => {
      it('deberia reponder con un error si el nombre no es valido', (done) => {
        Recipe.create({})
          .then(() => done(new Error('requiere nombre valido')))
          .catch(() => done());
      });
      it('deberia funcionar cuando nombre es valido', () => {
        Recipe.create({ name: 'Sopa de brocoli con queso' });
      });
    });
  });
