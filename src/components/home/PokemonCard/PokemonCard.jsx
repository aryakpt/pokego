/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './PokemonCard.module.css';
import pokeApi from '../../../api/pokeApi';
const PokemonCard = ({ pokemon }) => {
  const [pokemonSprites, setPokemonSprites] = useState({});

  const getPokemon = async () => {
    const data = await pokeApi.getPokemon(pokemon.name);
    setPokemonSprites(data.sprites);
  };

  useEffect(() => {
    getPokemon();
  }, [pokemon]);

  return (
    <li>
      <div className={styles['pokemon-card']}>
        <img src={pokemonSprites.front_default} alt="image not found" />
        <p>{pokemon.name}</p>
        <Link to={`/detail/${pokemon.name}`}>Detail</Link>
      </div>
    </li>
  );
};

export default PokemonCard;
