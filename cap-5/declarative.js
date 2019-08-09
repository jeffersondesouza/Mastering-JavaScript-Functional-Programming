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

const markers = [
  { name: "UY", lat: -34.9, lon: -56.2 },
  { name: "AR", lat: -34.6, lon: -58.4 },
  { name: "BR", lat: -15.8, lon: -47.9 },
  { name: "BO", lat: -16.5, lon: -68.1 }
];

const avLat = average(markers.map(item => item.lat));
const avLon = average(markers.map(item => item.lon));

console.log("avLat:", avLat);
console.log("avLon:", avLon);

const range = (start, stop) => new Array(stop).fill(0).map((v, i) => start + i);

const factorialByRange = n => range(1, n).reduce((x, y) => x * y, 1);

console.log("range:", range(0, 10));
console.log("factorial:", factorialByRange(0));
console.log("factorial:", factorialByRange(3));
console.log("factorial:", factorialByRange(6));
