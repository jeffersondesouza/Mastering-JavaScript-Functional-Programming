const people = [
  { id: 1, balance: 1 },
  { id: 2, balance: 0 },
  { id: 3, balance: -2 },
  { id: 4, balance: 10 }
];

console.log([...people].sort((a, n) => a.balance - n.balance));
