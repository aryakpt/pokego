import axios from 'axios';
import apiConfig from './apiConfig';

const instance = (baseURL) => {
  return axios.create({
    baseURL: baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const pokeapiReq = instance(apiConfig.POKEAPI_BASE_URL);
export { pokeapiReq };
