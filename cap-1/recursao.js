const fatorial = n => (n === 0 ? 1 : n * fatorial(n - 1));

console.log(fatorial(1));
console.log(fatorial(2));
console.log(fatorial(3));
console.log(fatorial(4));
console.log(fatorial(5));
console.log(fatorial(6));

const soma = x => y => x + y;

console.log(soma(1)(2));
