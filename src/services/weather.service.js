import secrets from "./secrets.service";
// import { storageService } from "./storage.service";
import http from "./http.service";

export default {
  currentConditions,
  forecasts5Days,
  autocomplete,
  getLanLonWeather
};

const BASE_URL = `http://dataservice.accuweather.com/`;
const VERSION = "v1";
let API = secrets.api;


async function currentConditions(cityKey = 215854) {
  try {
    const endpoint = `currentconditions/${VERSION}/${cityKey}?apikey=${API}`;
    const weatherData = await http.get(BASE_URL, endpoint);
    return weatherData;
  } catch (err) {
    _errorHandeling(err)
  }
}

async function forecasts5Days(cityKey = 215854) {
  try {
    const endpoint = `forecasts/${VERSION}/daily/5day/${cityKey}?apikey=${API}`;
    const forecastData = await http.get(BASE_URL, endpoint);
    return forecastData;
  } catch (err) {
    _errorHandeling(err)
  }
}

async function autocomplete(term) {
  if (!term) return;
  try {
    const endpoint = `locations/${VERSION}/cities/autocomplete?apikey=${API}&q=${term}`;
    const res = await http.get(BASE_URL, endpoint);
    return res;
  } catch (err) {
    _errorHandeling(err)
  }
}
async function getLanLonWeather(term) {
  if (!term) return;
  try {
    const endpoint = `locations/${VERSION}/cities/geoposition/search?apikey=${API}&q=${lat}%2C${lon}`;
    const res = await http.get(BASE_URL, endpoint);
    return res;
  } catch (err) {
    _errorHandeling(err)
  }
}



function _errorHandeling(err) {
    // if (err.status === 503)  
    // if (err.status === 401) 
    throw err
}