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
