import { useState } from 'react';
import { DefaultLayout, Container } from '../../components/layout';
import { PokemonCard } from '../../components/home';
import styles from './Home.module.css';

import { useGetPokemonsQuery } from '../../services/slices/pokemonSlice';
import { SplashScreen } from '../../components';

const Home = () => {
  const [searchPokemonName, setSearchPokemonName] = useState('');
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);
  const { data: pokemons, isLoading } = useGetPokemonsQuery(offset, limit);

  if (isLoading) return <SplashScreen />;
  return (
    <DefaultLayout>
      <Container>
        <div className={styles['home__form']}>
          <form onSubmit={(e) => e.preventDefault()}>
            <label>Search: </label>
            <input
              type="text"
              value={searchPokemonName}
              placeholder="Search pokemon..."
              onChange={(e) => setSearchPokemonName(e.target.value)}
            />
          </form>
        </div>
        <ul className={styles['home__pokemon-list']}>
          {pokemons.results
            .filter((pokemon) => pokemon.name.toLowerCase().match(searchPokemonName.toLowerCase()))
            .map((pokemon, idx) => {
              return <PokemonCard key={idx} pokemon={pokemon} />;
            })}
        </ul>
        <div className={styles['home__pagination']}>
          <button onClick={() => setOffset((prev) => prev - 20)} disabled={!pokemons.previous}>
            Previous
          </button>
          <button onClick={() => setOffset((prev) => prev + 20)} disabled={!pokemons.next}>
            Next
          </button>
        </div>
      </Container>
    </DefaultLayout>
  );
};

export default Home;
