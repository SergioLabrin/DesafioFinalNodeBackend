const request = require('supertest');
const app = require('../app');

test('DELETE /cafes con un ID inexistente debe devolver 404', async () => {
  const response = await request(app).delete('/cafes/999');
  expect(response.statusCode).toBe(404);
});
