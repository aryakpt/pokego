import { z } from "zod";

export const pokemonListResultSchema = z.object({
  name: z.string(),
  url: z.string(),
});

export type PokemonListResultSchema = z.infer<typeof pokemonListResultSchema>;

export const pokemonListSchema = z.object({
  count: z.number(),
  next: z.string().nullable(),
  previous: z.string().nullable(),
  results: z.array(pokemonListResultSchema),
});

export type PokemonListSchema = z.infer<typeof pokemonListSchema>;
