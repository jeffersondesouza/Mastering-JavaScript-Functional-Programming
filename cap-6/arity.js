const unary = fn => (...args) => fn(args[0]);
const not = fn => (...args) => !fn(...args);

const arr = ["123.45", "-67.8", "90"].map(parseInt);
const arr2 = ["123.45", "-67.8", "90"].map(unary(parseInt));

console.log("arr:", arr);
console.log("arr:", arr2);

const isNull = x => x === null || x === undefined;
var a;

const alunoAprovado = media => media >= 7;
const alunoReprovado = not(alunoAprovado);

console.log("alunoAprovado:", alunoAprovado(1));
console.log("alunoAprovado:", alunoAprovado(5));
console.log("alunoAprovado:", alunoAprovado(7));
console.log("alunoAprovado:", alunoAprovado(10));

console.log("alunoReprovado:", alunoReprovado(1));
console.log("alunoReprovado:", alunoReprovado(5));
console.log("alunoReprovado:", alunoReprovado(7));
console.log("alunoReprovado:", alunoReprovado(10));
