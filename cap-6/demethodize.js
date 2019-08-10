const demethodize = fn => (...args) => fn.bind(...args)();

const map = demethodize(Array.prototype.map);
const toUpperCase = demethodize(String.prototype.toUpperCase);

console.log(map("FUNCTIONAL", toUpperCase));
