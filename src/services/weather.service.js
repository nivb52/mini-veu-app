import secrets from "./secrets.service";
import {storageService} from "./storage.service";
import http from "./http.service";


export default {
    currentConditions,
    forecasts5Days,
    autocomplete
};


const BASE_URL = `http://dataservice.accuweather.com/`;
const VERSION = 'v1';
const API = secrets.api;

const STORAGE_KEYS = {
    current : 'current-conditions',
    forecasts5Days: '5-days-forecasts',
    autocomplete : 'autocomplete'
}



async function currentConditions(cityCode = 213225) {
    
	const endpoint = `currentconditions/${VERSION}/${cityCode}?apikey=${API}`;
    const data = await storageService.load(STORAGE_KEYS.current) 
                    || http.get(BASE_URL, endpoint, data)
    storageService.store(STORAGE_KEYS.current , data)
    
    
    console.log(data);
    return data[0]
}

async function forecasts5Days(cityCode = 213225) {
	const endpoint = `forecasts/${VERSION}/daily/5day`;
    const data = await  storageService.load(STORAGE_KEYS.forecasts5Days) 
                     || http.get(BASE_URL, endpoint, data)
    storageService.store(STORAGE_KEYS.forecasts5Days , data)

    console.log(data);
    return data[0]
}

async function autocomplete(search = null) {
    if (!search) return

	const endpoint = `locations/${VERSION}/cities/autocomplete`;
    const data = await http.get(BASE_URL, endpoint, data)
    storageService.store(STORAGE_KEYS.corrent , data)

    console.log(data);
    return data[0]
}