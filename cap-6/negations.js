const serviceResult = {
  accountsData: [
    { id: 1, balance: 1 },
    { id: 2, balance: 0 },
    { id: 3, balance: -2 },
    { id: 4, balance: 10 }
  ]
};

/* const delinquent = serviceResult.accountsData.filter(v => v.balance < 0);
const notDelinquent = serviceResult.accountsData.filter(v => v.balance >= 0); */

const isNegativeBalance = v => v.balance < 0;
const not = fn => (...args) => !fn(...args);

const delinquent = serviceResult.accountsData.filter(isNegativeBalance);
const notDelinquent = serviceResult.accountsData.filter(not(isNegativeBalance));

console.log("delinquent:", delinquent);
console.log("notDelinquent:", notDelinquent);
