const HttpService = require("./facade-adapter");

const beerRepository = {
  listBeers: data => ({
    path: "https://api.punkapi.com/v2/beers?page=1&per_page=1",
    method: "GET",
    data
  })
};

const saga = () => {
  HttpService.fetch(beerRepository.listBeers({ tokes: 111 })).then(res=> res);
};

saga();
