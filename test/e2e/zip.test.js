require('../connect-db');
const request = require('supertest');
const app = require('../../lib/app');

describe('zip routes', () => {
  it('returns an object with zip, lat, and lng, when given a zip', async() => {
    const res = await request(app)
      .get('/api/v1/zip/06820');

    expect(res.body).toEqual({
      lat: '41.076202',
      lng: '-73.480080'
    });
  });

  it('returns empty object if zip not found', async() => {
    const res = await request(app)
      .get('/api/v1/zip/99999');

    expect(res.body).toEqual({});
  });
});
