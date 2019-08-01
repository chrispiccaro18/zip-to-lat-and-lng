require('../connect-db');

const mongoose = require('mongoose');
const ZipAndLatLng = require('../../lib/models/ZipAndLatLng');

describe('ZipAndLatLng model', () => {
  it('has a zip, lat, and lng', async() => {
    const zipAndLatLng = new ZipAndLatLng({
      zip: 'test zip',
      lat: 'test lat',
      lng: 'test lng'
    });

    expect(zipAndLatLng.toJSON()).toEqual({
      _id: expect.any(mongoose.Types.ObjectId),
      zip: 'test zip',
      lat: 'test lat',
      lng: 'test lng'
    });
  });
  
  it('has a required zip, lat, and lng', async() => {
    const zipAndLatLng = new ZipAndLatLng({});

    const errors = zipAndLatLng.validateSync().errors;
    expect(errors.zip.message).toBe('Path `zip` is required.');
    expect(errors.lat.message).toBe('Path `lat` is required.');
    expect(errors.lng.message).toBe('Path `lng` is required.');
  });
});
