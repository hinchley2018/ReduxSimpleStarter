import * as axios from "axios";

const WEATHER_API_KEY = '9a2421509e61ec55533a2adcb34c9075';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(cityName,countryName="us"){
    const finalURL = `${ROOT_URL}&q=${cityName},${countryName}`;
    const request = axios.get(finalURL);
    return{
        type: FETCH_WEATHER,
        payload: request
    };
}