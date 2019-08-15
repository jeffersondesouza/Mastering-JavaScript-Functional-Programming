const ARRAY_NUMBERS = [22, 9, 60, 12, 4, 56];

const quicksort = arr => {
  if (arr.length < 2) return arr;

  const pivot = arr[0];

  const smaller = arr.slice(1).filter(x => x < pivot);
  const greaterEqual = arr.slice(1).filter(x => x >= pivot);

  return [...quicksort(smaller), pivot, ...quicksort(greaterEqual)];
};

console.log(quicksort(ARRAY_NUMBERS));
