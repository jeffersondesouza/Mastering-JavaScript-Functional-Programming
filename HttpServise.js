const axios = require("axios");

const manyUnderlinesReg = new RegExp(/__*/g);
const underFollowedByCharReg = new RegExp(/_(\w)/g);
const underlineAtEndReg = new RegExp(/_$/g);

const lowerCamelCaseWord = word =>
  word
    .replace(manyUnderlinesReg, "_")
    .replace(underFollowedByCharReg, x => x.toUpperCase())
    .replace(underFollowedByCharReg, "$1")
    .replace(underlineAtEndReg, "");

const getSnackeKeysFrom = obj => Object.getOwnPropertyNames(obj);

const keysValuesToCamelCaseObject = originalObj => (newObj, key) => {
  const camelKey = lowerCamelCaseWord(key);
  const value = originalObj[key];
  return { ...newObj, [camelKey]: value };
};

const parseSnackToCamel = obj =>
  getSnackeKeysFrom(obj).reduce(keysValuesToCamelCaseObject(obj), {});

const request = async (requestOptions, httpMapper) => {
  const res = await axios(requestOptions);
  const data = httpMapper ? httpMapper(res.data) : res.data;

  return { data, status: res.status };
};

module.exports = {
  request,
  parseSnackToCamel
};
