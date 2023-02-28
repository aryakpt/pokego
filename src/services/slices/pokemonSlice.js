import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import apiConfig from '../../api/apiConfig';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiConfig.POKEAPI_BASE_URL }),
  endpoints: (builder) => ({
    getPokemons: builder.query({
      query: ({ offset, limit }) => `pokemon/?offset=${offset}&limit=${limit}`,
    }),
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetPokemonsQuery, useGetPokemonByNameQuery } = pokemonApi;
