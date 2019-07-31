module.exports = (string) => {
  const stringArray = string
    .split('\n')
    .map(string => string.split(','));

  const keys = stringArray[0];
  const values = stringArray.splice(1, stringArray.length - 2);

  const result = values.map(value => ({
    [keys[0].toLowerCase()]: value[0].trim(),
    [keys[1].toLowerCase()]: value[1].trim(),
    [keys[2].toLowerCase()]: value[2].trim()
  }));

  return result;
};
