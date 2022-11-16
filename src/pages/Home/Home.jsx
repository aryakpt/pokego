import { useState, useEffect } from 'react';
import { DefaultLayout, Container } from '../../components/layout';
import { PokemonCard } from '../../components/home';
import styles from './Home.module.css';
import pokeApi from '../../api/pokeApi';

const Home = () => {
  const [pokemons, setPokemons] = useState({ next: null, previous: null, results: [] });
  const [searchPokemonName, setSearchPokemonName] = useState('');

  const getPokemons = async () => {
    const data = await pokeApi.getPokemons();
    setPokemons({ next: data.next, previous: data.previous, results: data.results });
  };

  const getNextPrevPokemons = async (url) => {
    const data = await pokeApi.getNextPrevPokemons(url);
    setPokemons({ next: data.next, previous: data.previous, results: data.results });
  };

  useEffect(() => {
    getPokemons();
  }, []);

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
          <button
            onClick={() => getNextPrevPokemons(pokemons.previous)}
            disabled={!pokemons.previous}
          >
            Previous
          </button>
          <button onClick={() => getNextPrevPokemons(pokemons.next)} disabled={!pokemons.next}>
            Next
          </button>
        </div>
      </Container>
    </DefaultLayout>
  );
};

export default Home;
