const express = require('express');
const app = express();
const cors = require('cors');
// const mongoConnection = require('./middleware/mongo-connection');

const { rawData } = require('../lib/services/raw-data');
const stringToObject = require('./utils/string-to-objects');

app.use(cors());

app.use(require('morgan')('tiny', {
  skip: () => process.env.NODE_ENV = 'test'
}));

app.use(express.json());

rawData()
  .then(data => {
    console.log(data);
    return stringToObject(data);
  })
  .then(cleanData => {
    console.log(cleanData);
  });

// app.use('/api/v1/notes', mongoConnection, require('./routes/notes'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
