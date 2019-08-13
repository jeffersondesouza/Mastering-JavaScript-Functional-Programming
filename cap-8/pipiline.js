const { curry } = require("./../utils/curry");

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const double = arr => arr.map(v => v * 2);

const filterGreaterThan = (n, arr) => arr.filter(v => v > n);

const count = arr => arr.length;

const filterGreaterThanSix = curry(filterGreaterThan)(6);

/* # V1 

const pipeline = (...fns) => (...args) => {
  let result = fns[0](...args);

  for (let i = 1; i < fns.length; i++) {
    console.log("result:", result);
    result = fns[i](result);
  }
  return result;
}; */

const pipeline = (...fns) =>
  fns.reduce((result, f) => (...args) => f(result(...args)));

const v = pipeline(double, filterGreaterThanSix, count)(values);

console.log("v:", v);


module.exports = pipeline;