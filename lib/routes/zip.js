const { Router } = require('express');
const ZipAndLatLng = require('../models/ZipAndLatLng');

module.exports = Router()
  .get('/:zip', async(req, res, next) => {
    const zip = req.params.zip;
    try {
      const zipObj = await ZipAndLatLng.findOne({ zip }).lean();
      res.send(zipObj);
    } catch(err) {
      next(err);
    }
  });
