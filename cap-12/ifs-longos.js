const Maybe = require("./maybe");

const doSomenthing1 = input => (input >= 10 ? input + 1 : null);
const doSomenthing2 = input => (input >= 11 ? input + 1 : null);
const doSomenthing3 = input => (input >= 12 ? input + 1 : null);

const operacao = input => {
  const x = doSomenthing1(input);
  if (x !== null) {
    const y = doSomenthing2(x);
    if (y !== null) {
      const z = doSomenthing3(y);
      if (z !== null) {
        return z;
      } else {
        return null;
      }
    } else {
      return null;
    }
  } else {
    return null;
  }
};

const operacao2 = input => {
  return Maybe.of(input)
    .map(doSomenthing1)
    .map(doSomenthing2)
    .map(doSomenthing3)
    .get();
};


const operacao3 = input => {
  return Maybe.of(input)
    .map(doSomenthing1)
    .map(doSomenthing2)
    .map(doSomenthing3)
    .get();
};


console.log("operacao: ", operacao(null));
console.log("operacao: ", operacao(1));
console.log("operacao: ", operacao(10));
// resolve-se com uma Monada


console.log("operacao2:  ", null);
console.log("operacao2:  ", operacao2(1));
console.log("operacao2:  ", operacao2(10));
