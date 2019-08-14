const powerN = (base, power) => {
  if (power === 0) {
    return 1;
  } else if (power % 2) {
    return base * powerN(base, power - 1);
  } else {
    return powerN(base * base, power / 2);
  }
};

console.log(powerN(2, 0));
console.log(powerN(2, 1));
console.log(powerN(2, 2));
console.log(powerN(2, 3));
console.log(powerN(2, 4));
