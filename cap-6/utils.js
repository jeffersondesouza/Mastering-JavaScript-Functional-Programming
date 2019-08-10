const addTiming = require("./addTiming");
const memorize = require("./memorizing");

function fib(n) {
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else {
    return fib(n - 2) + fib(n - 1);
  }
}

fib = memorize(fib);


addTiming(fib)(35);
addTiming(fib)(25);
addTiming(fib)(15);
addTiming(fib)(35);

/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/* #addTiming#

const subtract = (a, b) => {
  return a - b;
};

const subtractLog = addTiming(subtract);
console.log(subtract(1, 2));
console.log(subtract(10, 2));

subtractLog(1, 2)
subtractLog(10, 2) */
