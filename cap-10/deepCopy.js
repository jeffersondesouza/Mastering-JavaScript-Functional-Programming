const deepCopy = obj => {
  let aux = obj;
  if (obj && typeof obj === "object") {
    aux = new obj.constructor();
    Object.getOwnPropertyNames(obj).forEach(
      prop => (aux[prop] = deepCopy(obj[prop]))
    );
  }
  return aux;
};
