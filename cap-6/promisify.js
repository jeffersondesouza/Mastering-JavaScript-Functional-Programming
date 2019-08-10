const fs = require("fs");

const promisify = fn => (...args) => {
  return new Promise((resove, reject) => {
    return fn(...args, (err, data) => {
      return err ? reject(err) : resove(data);
    });
  });
};

// NORMAL
const cb = (err, data) =>
  err ? console.log("Error: ", err) : console.log("SUCCESS: ", data);

fs.readFile(`${__dirname}/hello.txt`, cb);
fs.readFile(`${__dirname}/hellosss.txt`, cb);

// Promisify

const fsPromise = promisify(fs.readFile.bind(fs));

const successRead = data => console.log("SUCCESS PROMISE: ", data);
const failureRead = err => console.log("FAILURE PROMISE: ", err);

fsPromise(`${__dirname}/hello.txt`)
  .then(successRead)
  .catch(failureRead);
  
fsPromise(`${__dirname}/hellosss.txt`)
  .then(successRead)
  .catch(failureRead);
