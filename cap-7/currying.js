const make3 = (a, b, c) => String(100 * a + 10 * b + c);
const make3curried = a => b => c => String(100 * a + 10 * b + c);
/* ################################ */

const addVAT = rate => amount => amount * (1 + rate / 100);

const addGarconsVAT = addVAT(5);

console.log(addVAT(20)(500));
console.log(addVAT(15)(200));

console.log(addGarconsVAT(50));
