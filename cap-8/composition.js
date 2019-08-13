const pipiline = require("./pipiline");

const list = [1, 2, 3, 4];
console.log("list:", list);

// composição matemática clásica (f*g*h) = (f(g((h)))
const filtraPares = arr => arr.filter(v => v % 2 === 0);

const dobraLista = arr => arr.map(v => v * 2);

const somaLista = arr => arr.reduce((t, v) => (t += v));

const result = somaLista(dobraLista(filtraPares(list)));

console.log("result:", result);

// Numa composição seria algo do tipo

/* 
 compose(somaLista, dobraLista, filtraPares)(list);
*/

// Mas  por uma questao de ordem de execução a versão com o pipiline mostra-se  mais legível e intuitiva

// PIPILINE
const result2 = pipiline(filtraPares, dobraLista, somaLista)(list);

console.log("result:", result2);
