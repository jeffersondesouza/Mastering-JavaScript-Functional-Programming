import { loadBeersHttpMapper } from "./repository/Beers/index";
import { loadBeersQuery, saveBeerQuery } from "./repository/Beers/index";

// Query HTTP
const BASE_URL = "https://api.punkapi.com/v2";


HttpService.requestQL(loadBeersHttpQuery).map(loadBeersHttpMappers);

HttpService.request(loadBeerHttpQuery).map(loadBeersHttpMappers);
