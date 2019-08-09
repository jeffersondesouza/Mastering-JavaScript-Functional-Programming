let limitYear = 1999;

// Impure
const isOldEnoughImpure = birthYear => birthYear <= limitYear;

console.log("isOldEnoughImpure:", isOldEnoughImpure(2001));
console.log("isOldEnoughImpure:", isOldEnoughImpure(1997));

// Pure
const isOldEnoughPure = (birthYear, limit) => birthYear <= limit;

const isOldEnough = limit => birthYear => birthYear <= limit;

console.log("isOldEnoughPure:", isOldEnoughPure(2001, limitYear));
console.log("isOldEnoughPure:", isOldEnoughPure(1997, limitYear));

console.log("isOldEnough:", isOldEnough(limitYear)(2001));
console.log("isOldEnough:", isOldEnough(limitYear)(1997));
