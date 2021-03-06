const { Router } = require('express');
const ZipAndLatLng = require('../models/ZipAndLatLng');

const selectOptions = {
  _id: false,
  __v: false,
  zip: false
};

module.exports = Router()
  .get('/:zip', async(req, res, next) => {
    const zip = req.params.zip;
    try {
      const zipObj = await ZipAndLatLng
        .findOne({ zip })
        .lean()
        .select(selectOptions)
        || {};
      res.send(zipObj);
    } catch(err) {
      next(err);
    }
  });
