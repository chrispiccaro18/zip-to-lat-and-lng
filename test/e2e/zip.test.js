require('../connect-db');
const request = require('supertest');
const app = require('../../lib/app');

describe('zip routes', () => {
  it('returns an object with zip, lat, and lng, when given a zip', async() => {
    const res = await request(app)
      .get('/api/v1/zip/06820');

    expect(res.body).toEqual({
      _id: expect.any(String),
      __v: 0,
      zip: '06820',
      lat: '41.076202',
      lng: '-73.480080'
    });
  });
});
