import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PokemonListSchema, pokemonListSchema } from "./schemas";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  endpoints: (builder) => ({
    getPokemons: builder.query<
      PokemonListSchema,
      { offset?: number; limit?: number }
    >({
      query: ({ offset, limit }) => `pokemon/?offset=${offset}&limit=${limit}`,
      transformResponse: (response: PokemonListSchema) => {
        pokemonListSchema.parse(response);
        return response;
      },
    }),
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetPokemonsQuery, useGetPokemonByNameQuery } = pokemonApi;
