const { response } = require('express');
// const { it } = require('node:test');
const request = require('supertest');

const server = 'http://localhost:3000';

describe('Router Testing', () => {
  describe('/', () => {
    describe('GET', () => {
      it('Responds with 200 status and text/html content type', () => {
        return request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200);
      });
    });
  });

  describe('Test /api/dog/:user route', () => {
    describe('GET', () => {
      it('Responds with a JSON object', async () => {
        const user = '65ecbe30d6da6de8222431e2';
        return request(server)
          .get(`/api/dog/${user}`)
          .expect('Content-Type', /json/)
          .expect(200)
          .then((response) => {
            expect(response.body).toBeInstanceOf(Object);
          });
      });
    });
  });
});
