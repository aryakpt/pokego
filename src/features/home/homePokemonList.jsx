import React from 'react';
import styles from './homePokemonList.module.css';
import PokemonCard from './pokemonCard';

const HomePokemonList = ({ pokemons, searchPokemonName }) => {
  return (
    <section className={styles['home__pokemonList']}>
      <ul className={styles['home__pokemonList__list']}>
        {pokemons
          ?.filter((pokemon) =>
            pokemon.name.toLowerCase().match(searchPokemonName.toLowerCase())
          )
          .map((pokemon, idx) => {
            if (pokemon) return <PokemonCard key={idx} pokemon={pokemon} />;
            return 'Not Found';
          })}
      </ul>
    </section>
  );
};

export default HomePokemonList;
