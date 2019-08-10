const once = func => {
  let done = false;
  let result;
  return (...args) => {
    if (!done) {
      done = true;
      result = func(...args);
    }

    return result;
  };
};

const onceAndAfter = (f, g) => {
  let toCall = f;
  return (...args) => {
    let result = toCall(...args);
    toCall = g;
    return result;
  };
};

module.exports = {
  once,
  onceAndAfter
};


/* 


const { once, onceAndAfter } = require("./once");

const squeak = x => console.log(x, "squeak!!");
const creak = x => console.log(x, "creak!!");

const makeSound = once(squeak);
const makeSound2 = onceAndAfter(squeak, creak);

makeSound("grito 1");
makeSound("grito 1");
makeSound("grito 1");

makeSound2("grito 2");
makeSound2("silencio 1");
makeSound2("silencio 2");


*/