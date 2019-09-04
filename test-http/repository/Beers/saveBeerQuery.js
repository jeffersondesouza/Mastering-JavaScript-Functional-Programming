export default saveBeerHttpQuery = beer => ({
  url: "/beers/",
  method: "POST",
  data: beer
});