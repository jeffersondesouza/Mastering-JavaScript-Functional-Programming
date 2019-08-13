/* FOLDER STRUCTURE 
  utils
    /time (delay, isToday, tomorow, rangeDate, isToday, isBefore, isAfter, daysDiff)
    /math (between,range, toString(stringfy), round, round2)
    /array (toObject, fromObject, toDimensional, getFieldMap, avarage)
    /functions (not, pipeline, promisify)
*/

const unary = fn => (...args) => fn(args[0]);
const isNull = x => x === null || x === undefined;
const not = fn => (...args) => !fn(...args);
