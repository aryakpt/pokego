// CORES
import { useState } from 'react';
import { Link } from 'react-router-dom';

// STYLES
import styles from './homePage.module.css';

// UIs
import { Container } from '../components/layout';
import { Button } from '../components';
import {
  HomeHeader,
  HomePagination,
  HomePokemonList,
  HomeSearchBar,
} from '../features/home';

// APIs
import { useGetPokemonsQuery } from '../services/slices/pokemonSlice';

const HomePage = () => {
  const limit = 12;
  const [offset, setOffset] = useState(0);
  const [searchPokemonName, setSearchPokemonName] = useState('');
  const { data: pokemons, isFetching } = useGetPokemonsQuery({
    offset,
    limit,
  });

  return (
    <Container isApiLoading={isFetching}>
      <Link to={'/game'} className={styles['btn-game']}>
        <Button type="primary">Play Game!</Button>
      </Link>
      <HomeHeader />
      <HomeSearchBar
        searchPokemonName={searchPokemonName}
        setSearchPokemonName={setSearchPokemonName}
      />
      <HomePokemonList
        pokemons={pokemons?.results}
        searchPokemonName={searchPokemonName}
      />
      <HomePagination limit={limit} pokemons={pokemons} setOffset={setOffset} />
    </Container>
  );
};

export default HomePage;
