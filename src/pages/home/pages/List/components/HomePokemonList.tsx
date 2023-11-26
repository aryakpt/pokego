import React from "react";
import styles from "./HomePokemonList.module.css";
import PokemonCard from "./PokemonCard";
import { PokemonListResultSchema } from "../../../api/schemas";

interface HomePokemonListProps {
  pokemons: PokemonListResultSchema[];
  pokemonName: string;
}
const HomePokemonList = (props: HomePokemonListProps) => {
  const { pokemons, pokemonName } = props;
  return (
    <section className={styles.homePokemonContainer}>
      <ul className={styles.homePokemonList}>
        {pokemons
          ?.filter((pokemon) =>
            pokemon.name.toLowerCase().match(pokemonName.toLowerCase())
          )
          .map((pokemon, idx) => {
            if (pokemon) return <PokemonCard key={idx} pokemon={pokemon} />;
            return "Not Found";
          })}
      </ul>
    </section>
  );
};

export default HomePokemonList;
