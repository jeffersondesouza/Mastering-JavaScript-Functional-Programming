const HttpService = require("./HttpServise.js");
const parseSnackToCamel = require("./HttpServise.js").parseSnackToCamel;

/* 
  O importante é termos os types separados, o factory pode ser inrelevante, uam vez que
  no Mapper noós iremos informar o type do retorno, logo, basta seguirmos esse retorno
*/

const BeerApi = {
  loadBeer: () => ({
    url: "https://api.punkapi.com/v2/beers/1",
    method: "GET"
  })
};

// type Beer { id, name }
const BeerHttpMapper = {
  fromLoadBeer: (data) /* :Beer  */ => {
    const beer = parseSnackToCamel(data[0]);
    return { id: beer.id, name: beer.name };
  }
};

// request(requestOptions, httpMapper) 

const sagas = async () => {
  const beer = await HttpService.request(
    BeerApi.loadBeer(),
    BeerHttpMapper.fromLoadBeer
  );
  
 
/*   
  const user = await HttpService.request(
    UserAPI.login(),
    UserHttpMapper.fromLogin
  );

  const user2 = await HttpService.request(
    UserAPI.validateToken(),
    UserHttpMapper.fromLogin
  ); 
*/
 
  console.log("beer:", beer.data);
};

sagas();


