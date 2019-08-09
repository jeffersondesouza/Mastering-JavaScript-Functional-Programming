let limitYear = 1999;

// Impure
const isOldEnoughImpure = birthYear => birthYear <= limitYear;

/* console.log("isOldEnoughImpure:", isOldEnoughImpure(2001));
console.log("isOldEnoughImpure:", isOldEnoughImpure(1997));
 */
// Pure
const isOldEnoughPure = (birthYear, limit) => birthYear <= limit;

const isOldEnough = limit => birthYear => birthYear <= limit;
/* 
console.log("isOldEnoughPure:", isOldEnoughPure(2001, limitYear));
console.log("isOldEnoughPure:", isOldEnoughPure(1997, limitYear));

console.log("isOldEnough:", isOldEnough(limitYear)(2001));
console.log("isOldEnough:", isOldEnough(limitYear)(1997));
 */
/*  */

const roundFix = (function() {
  let accum = 0;
  return n => {
    let nRounded = accum > 0 ? Math.ceil(n) : Math.floor(n);
    accum += n - nRounded;
    return nRounded;
  };
})();

const roundFixPure = accum => n => {
  let nRounded = accum > 0 ? Math.ceil(n) : Math.floor(n);
  accum += n - nRounded;
  return nRounded;
};

console.log("roundFix: ", roundFix(3.145));
console.log("roundFix: ", roundFix(3.145));
console.log("roundFix: ", roundFix(3.145));
console.log("roundFix: ", roundFix(3.145));

console.log("roundFix pure: ", roundFixPure(0)(3.145));
console.log("roundFix pure: ", roundFixPure(0)(3.145));
console.log("roundFix pure: ", roundFixPure(0)(-0.145));
console.log("roundFix pure: ", roundFixPure(0)(-0.145));
