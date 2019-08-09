const myData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const average = data => {
  const sc = data.reduce(
    (ac, val) => ({ sum: ac.sum + val, count: ac.count + 1 }),
    {
      sum: 0,
      count: 0
    }
  );

  return sc.sum / sc.count;
};

console.log(average(myData));

