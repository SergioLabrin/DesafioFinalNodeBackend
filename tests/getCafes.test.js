const request = require('supertest');
const app = require('../app');

test('GET /cafes debe devolver 200 y un array con al menos un objeto', async () => {
  const response = await request(app).get('/cafes');
  expect(response.statusCode).toBe(200);
  expect(Array.isArray(response.body)).toBe(true);
  expect(response.body.length).toBeGreaterThan(0);
});

