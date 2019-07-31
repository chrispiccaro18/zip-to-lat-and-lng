require('../connect-db');

const mongoose = require('mongoose');
const ZipAndLatLng = require('../../lib/models/ZipAndLatLng');

describe('ZipAndLatLng model', () => {
  it('has a zip, lat, and lng', () => {
    const zipAndLatLng = new ZipAndLatLng({
      zip: '06830',
      lat: '12.124234',
      lng: '-67.0999'
    });

    expect(zipAndLatLng.toJSON()).toEqual({
      _id: expect.any(mongoose.Types.ObjectId),
      zip: '06830',
      lat: '12.124234',
      lng: '-67.0999'
    });

  });
  
  it('has a required zip, lat, and lng', () => {
    const zipAndLatLng = new ZipAndLatLng({});

    const errors = zipAndLatLng.validateSync().errors;
    expect(errors.zip.message).toBe('Path `zip` is required.');
    expect(errors.lat.message).toBe('Path `lat` is required.');
    expect(errors.lng.message).toBe('Path `lng` is required.');
  });
});
