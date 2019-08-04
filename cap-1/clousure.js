const counter = function() {
  let count = 0;
  console.log("counter: ", count);
  return function() {
    count++;
    return count;
  };
};

const nc = counter();
console.log("nc:", nc);


console.log('nc():', nc())
console.log('nc():', nc())
console.log('nc():', nc())
console.log('nc():', nc())
console.log('nc():', nc())