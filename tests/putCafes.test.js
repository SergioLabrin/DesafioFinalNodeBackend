const request = require('supertest');
const app = require('../app');

test('PUT /cafes debe devolver 400 si los IDs no coinciden', async () => {
  const cafeActualizado = { id: 2, nombre: 'Café Mocha' };

  const response = await request(app)
    .put('/cafes/1') // El ID en la URL es diferente al del cuerpo
    .send(cafeActualizado);

  expect(response.statusCode).toBe(400);
});
