require('dotenv').config();
const mongoose = require('mongoose');
const connect = require('../lib/utils/connect');

beforeAll(() => {
  return connect();
});

afterAll(() => {
  return mongoose.connection.close();
});
