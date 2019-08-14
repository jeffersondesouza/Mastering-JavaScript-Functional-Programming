const ARR_MOCK = [1, 2, 3, 4, 5, 6];

const contains = (arr, key) => {
  if (arr.length === 0) {
    return false;
  } else if (arr[0] === key) {
    return true;
  } else {
    return contains(arr.slice(1), key);
  }
};

console.log(contains([], 1));
console.log(contains(ARR_MOCK, 1));
console.log(contains(ARR_MOCK, 33));
console.log(contains(ARR_MOCK, 3));
console.log(contains(ARR_MOCK, 6));
