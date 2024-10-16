const request = require('supertest');
const app = require('../app');

test('POST /cafes debe agregar un nuevo café y devolver 201', async () => {
  const nuevoCafe = { id: 2, nombre: 'Café Americano' };

  const response = await request(app)
    .post('/cafes')
    .send(nuevoCafe);

  expect(response.statusCode).toBe(201);
  expect(response.body).toMatchObject(nuevoCafe);
});
