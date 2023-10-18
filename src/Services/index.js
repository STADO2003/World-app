import axios from 'axios';

const COUNTRY_API_ENDPOINTS = 'https://restcountries.com/v3.1';

export function getAllCountries() {
    // call API & get result 
    return axios.get(`${COUNTRY_API_ENDPOINTS}/all`)
}

export function getCountryDetail(countryCode) {
    return axios.get(`${COUNTRY_API_ENDPOINTS}/alpha/${countryCode}`);
}