/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { DefaultLayout, Container } from '../../components/layout';
import { PokemonDetailCard } from '../../components/detail';
import pokeApi from '../../api/pokeApi';
const Detail = () => {
  const { pokemonName } = useParams();
  const [pokemon, setPokemon] = useState({
    name: '',
    sprites: {},
    abilities: [],
    height: 0,
    species: {},
    stats: [],
  });

  const getPokemon = async () => {
    const data = await pokeApi.getPokemon(pokemonName);
    setPokemon({
      name: data.name,
      sprites: data.sprites,
      abilities: data.abilities,
      height: data.height,
      species: data.species,
      stats: data.stats,
    });
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <DefaultLayout>
      <Container>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <PokemonDetailCard pokemon={pokemon} />
        </div>
      </Container>
    </DefaultLayout>
  );
};

export default Detail;
