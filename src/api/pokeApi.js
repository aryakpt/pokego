import { pokeapiReq } from './axiosClient';

const pokeApi = {
  getPokemons: async () => {
    try {
      const res = await pokeapiReq.get('pokemon/');
      return res.data;
    } catch (error) {
      console.error(error.message);
    }
  },
  getNextPrevPokemons: async (url) => {
    try {
      const res = await pokeapiReq.get(url);
      return res.data;
    } catch (error) {
      console.error(error.message);
    }
  },
  getPokemon: async (pokemonName) => {
    try {
      const res = await pokeapiReq.get(`pokemon/${pokemonName}`);
      return res.data;
    } catch (error) {
      console.error(error.message);
    }
  },
};

export default pokeApi;
