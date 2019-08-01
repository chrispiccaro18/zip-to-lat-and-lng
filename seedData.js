require('dotenv').config();
const mongoose = require('mongoose');
const connect = require('./lib/utils/connect');
const { rawData } = require('./lib/services/raw-data');
const stringToObject = require('./lib/utils/string-to-objects');
const ZipAndLatLng = require('./lib/models/ZipAndLatLng');

connect(process.env.MONGODB_URI);

const seedData = async() => {
  await mongoose.connection.dropDatabase();
  const dirtyData = await rawData();
  const cleanData = await stringToObject(dirtyData);

  for(let i = 0; i < cleanData.length; i++) {
    await ZipAndLatLng.create(cleanData[i]);
  }

  mongoose.connection.close();
};

seedData();
