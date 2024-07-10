const supertest = require('supertest');
const { app } = require('../src/server');
const { db } = require('../src/auth/models');

const request = supertest(app);

beforeAll(async () => {
  await db.sync();
});

afterAll(async () => {
  await db.drop();
});

describe('Auth Routes', () => {
  it('can sign up a new user', async () => {
    const response = await request.post('/signup').send({
      username: 'testuser',
      password: 'testpass',
    });

    expect(response.status).toBe(201);
    expect(response.body.username).toBe('testuser');
  });

  it('can sign in with basic auth', async () => {
    const response = await request.post('/signin').auth('testuser', 'testpass');

    expect(response.status).toBe(200);
    expect(response.body.username).toBe('testuser');
  });
});
