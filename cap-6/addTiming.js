const { performance } = require("perf_hooks");

const myPut = (text, name, tStart, tEnd, diff) =>
  console.log(`${name} - ${text} - ${tStart} - ${tEnd} - ${diff}`);

const myGet = () => performance.now();

module.exports = (fn, getTime = myGet, output = myPut) => (...args) => {
  let tStart = getTime();

  try {
    const valueToRetur = fn(...args);

    const tEnd = getTime();
    const diff = tEnd - tStart;

    output("normal exit", fn.name, tStart, tEnd, diff);
    return valueToRetur;
  } catch (throwError) {
    output("exception thrown", fn.name, tStart, getTime());
    throw thrownError;
  }
};


