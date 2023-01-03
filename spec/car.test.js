const app = require('../app/index');
const request = require('supertest');
const models = require('../app/models');
const Car = models.Car;

let token = '';

beforeAll(async () => {
  const credentialsLogin = {
    email: 'johnny@binar.co.id',
    password: '123456',
  };

  const response = await request(app)
    .post('/v1/auth/login')
    .send(credentialsLogin);

  token = response.body.accessToken;
});

describe('GET /', () => {
  it('return 200 ok', (done) => {
    request(app)
      .get('/')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200, done);
  });
});

describe('GET /v1/cars', () => {
  it('return 200 ok', (done) => {
    request(app)
      .get('/v1/cars')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200, done);
  });
});

describe('POST /v1/cars', () => {
  it('return 201 created', async () => {
    const payload = {
      name: 'Pajero Test',
      price: 200000,
      size: 'medium',
      image: 'www.google.com',
    };

    await request(app)
      .post('/v1/cars')
      .set({
        Authorization: `Bearer ${token}`,
      })
      .set(payload)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(201);
  });
});

// ADD TEST UPDATE CARS
// Write your code here..

describe('PUT /v1/cars/:id', () => {
  it('return 200 ok', async () => {
    const payload = {
      name: 'Ford Pantera L',
      price: 450000,
      size: 'SMALL',
      image: 'www.google.com',
    };

    const payloadUpdate = {
      name: 'Ford',
      price: 550000,
      size: 'MEDIUM',
      image: 'www.google.com',
    };
    const car = await Car.create(payload);
    await request(app)
      .put('/v1/cars/' + car.id)
      .set({
        Authorization: `Bearer ${token}`,
      })
      .send(payloadUpdate)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200);
  });
});

// ADD TEST DELETE CARS
// Write your code here..
describe('DELETE /v1/cars/:id', () => {
  it('return 204', async () => {
    const payload = {
      name: 'Ferrari Dino',
      price: 700000,
      size: 'LARGE',
      image: 'www.google.com',
    };
    const car = await Car.create(payload);
    request(app)
      .delete('/v1/cars/' + car.id)
      .set({
        Authorization: `Bearer ${token}`,
      })
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(204);
  });
});
