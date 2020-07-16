const request = require('superagent');

const BASE_URL = 'https://gist.githubusercontent.com/chrispiccaro18/da405ffa7c303f3adf7ee46c18ecae68/raw/5bdc46db47d9515269ab12ed6fb2850377fd869e/US%2520Zip%2520Codes%2520from%25202013%2520Government%2520Data';

const rawData = async() => {
  try {
    const res = await request(BASE_URL);
    return res.text;
  } catch(err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

module.exports = {
  rawData
};
