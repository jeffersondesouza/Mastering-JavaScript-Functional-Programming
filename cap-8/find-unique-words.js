const pipeline = require("./pipiline");

const TEXT = `Four score and seven years ago
our fathers brought forth on this continent,
a new nation, conceived in Liberty, and dedicated to
the proposition that all men are created equal.
Now we are engaged in a great civil war, testing whether
that nation, or any nation so conceived and dedicated,
can long endure.`;

const removeNonAlpha = str => str.replace(/[^a-z]/gi, " ");

const toUppercase = str => str.toUpperCase();

const splitInWords = str => str.trim().split(/\s+/);

const arrayToSet = arr => new Set(arr);

const setToList = set => Array.from(set).sort();

const getUniqueWords = pipeline(removeNonAlpha, toUppercase,splitInWords, arrayToSet, setToList);

const uniqueWords = getUniqueWords(TEXT);
console.log("uniqueWords:", uniqueWords);
