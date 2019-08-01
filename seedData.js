const mongoose = require('mongoose');
const connect = require('./lib/utils/connect');
const { rawData } = require('./lib/services/raw-data');
const stringToObject = require('./lib/utils/string-to-objects');
const ZipAndLatLng = require('./lib/models/ZipAndLatLng');

connect(process.env.MONGODB_URI);

mongoose.connection.dropDatabase()
  .then(() => {
    rawData()
      .then(data => {
        return stringToObject(data);
      })
      .then(cleanData => {
        cleanData.forEach(zip => {
          ZipAndLatLng.create(zip);
        });
      });
  })
  .then(() => mongoose.connection.close());
