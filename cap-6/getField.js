const markers = require("../data/markers");

const getField = field => obj => obj[field];
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

const latitudes = markers.map(getField("lat"));
const avLat = average(latitudes);

console.log("markers:", markers);
console.log("latitudes:", latitudes);
console.log("avLat:", avLat);
