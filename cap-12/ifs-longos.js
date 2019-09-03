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

console.log(operacao(1));
console.log(operacao(10));
// resolve-se com uma Monada