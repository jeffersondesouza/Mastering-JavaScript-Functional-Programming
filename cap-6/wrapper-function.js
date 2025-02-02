const runLogging = fn => (...args) => {
  const result = fn(...args);
  console.log(`${fn.name} entry ${args} and returns: ${result}`);
  return result;
};

function subtract(a, b) {
  return a - b;
}

runLogging(subtract)(1, 2);
runLogging(subtract)(10, 2);

const memoize = fn => {
  let cache = {};
  return x => (x in cache ? cache[x] : (cache[x] = fn(x)));
};
