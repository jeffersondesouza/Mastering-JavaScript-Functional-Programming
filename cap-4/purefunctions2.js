let countries = ["Argentina", "Uruguay", "Brasil", "Paraguay"];
let countries2 = ["Argentina", "Uruguay", "Brasil", "Paraguay"];

const maxStringsInpure = list => list.sort().pop();

// Pure
const maxStrings = list => [...list].sort().pop();

console.log(maxStringsInpure(countries));
console.log("countries:", countries);

console.log(maxStrings(countries2));
console.log("countries2:", countries2);
