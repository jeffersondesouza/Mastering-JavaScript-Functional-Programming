console.log("---------- Mutável 1 ----------");

const objMut = {
  id: 1,
  nome: "nome",
  dados: { total: 1, lista: [1, 2, 3] }
};

console.log("objMut: ", objMut);
objMut.id = 2;
objMut.dados.total = 2;
objMut.dados.lista = ["a", "b"];

console.log("objMut: ", objMut);

console.log("---------- Mutável 2 ----------");
const objMut2 = {
  id: 1,
  nome: "nome",
  dados: { total: 1, lista: [1, 2, 3] }
};

Object.freeze(objMut2);

console.log("objMut2: ", objMut2);
objMut2.id = 2;
objMut2.dados.total = 2;
objMut2.dados.lista = ["a", "b"];
console.log("objMut2: ", objMut2);

console.log("---------- Imutável 3 ----------");

const deepFreeze = obj => {
  if (obj && typeof obj === "object" && !Object.isFrozen(obj)) {
    Object.freeze(obj);
    Object.getOwnPropertyNames(obj).forEach(prop => deepFreeze(obj[prop]));
  }

  return obj;
};

const objMut3 = {
  id: 1,
  nome: "nome",
  dados: { total: 1, lista: [1, 2, 3] }
};

deepFreeze(objMut3);

console.log("objMut3: ", objMut3);
objMut3.id = 2;
objMut3.dados.total = 2;
objMut3.dados.lista = ["a", "b"];
console.log("objMut3: ", objMut3);
