const curryByBind = fn =>
  fn.length === 0 ? fn() : p => curryByBind(fn.bind(null, p));

const curryByBindN = (fn, len = fn.length) =>
  len === 0 ? fn() : p => curryByBindN(fn.bind(null, p), len - 1);

const make3 = (a, b, c, d) => a + b + c + d;
const sum = (...args) => args.reduce((x, y) => x + y, 0);

const sumCurry = curryByBind(make3);
const sumCurryN = curryByBindN(sum, 7);

console.log("sumCurry: ", sumCurry(1)(2)(3)(4));

console.log("sumCurryN: ", sumCurryN(1)(2)(3)(4)(5)(6));

const soma = (x, y) => x + y;
const somado = soma.bind(null, 90, 9);

console.log("soma:", soma.length);
console.log("somado:", somado.length);

console.log("soma v  :", soma(1, 2));
console.log("somado v:", somado(1, 2));
