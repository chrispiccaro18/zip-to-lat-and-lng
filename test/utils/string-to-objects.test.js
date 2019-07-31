const stringToObjects = require('../../lib/utils/string-to-objects');
const { rawData } = require('../../lib/services/raw-data');

jest.mock('../../lib/services/raw-data.js');

describe('String to Object', () => {
  it('given a string return an array of objects', async() => {
    const data = await rawData();

    const dataArray = stringToObjects(data);

    const expected = [
      {
        zip: '00601',
        lat: '18.180555',
        lng: '-66.749961'
      },
      {
        zip: '00602',
        lat: '18.361945',
        lng: '-67.175597'
      },
      {
        zip: '00603',
        lat: '18.455183',
        lng: '-67.119887'
      },
    ];

    expect(dataArray).toEqual(expected);
  });
});
