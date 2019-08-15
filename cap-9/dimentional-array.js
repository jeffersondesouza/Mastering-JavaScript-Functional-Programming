const ARR_MOCK = [1, 2, 3, 4, 5, 6, 7];

const dimentionaLList = (dimention, arr) => {
  if (arr.length === 0) {
    return [];
  }
  const group = arr.slice(0, dimention);
  const rest = arr.slice(dimention);

  return [group, ...dimentionaLList(dimention, rest)];
};

const bi = dimentionaLList(3, ARR_MOCK);

console.log("bi:", bi);
