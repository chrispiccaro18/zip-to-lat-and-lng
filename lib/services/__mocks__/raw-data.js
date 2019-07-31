function rawData() {
  return Promise.resolve(zipsAndLatLng);
}

const zipsAndLatLng = `ZIP,LAT,LNG
  00601,18.180555, -66.749961
  00602,18.361945, -67.175597
  00603,18.455183, -67.119887`;

module.exports = {
  rawData
};
