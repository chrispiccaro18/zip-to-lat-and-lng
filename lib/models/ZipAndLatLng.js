const mongoose = require('mongoose');

const zipAndLatLngSchema = new mongoose.Schema({
  zip: {
    type: String,
    required: true
  },
  lat: {
    type: String,
    required: true
  },
  lng: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('ZipAndLatLng', zipAndLatLngSchema);
