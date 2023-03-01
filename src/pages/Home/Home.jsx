import { useState } from 'react';

import styles from './Home.module.css';
import { Container } from '../../components/layout';
import { SearchBar, Button } from '../../components';
import { PokemonCard } from '../../components/home';
import { PokemonLogo } from '../../assets/logo';

import { useGetPokemonsQuery } from '../../services/slices/pokemonSlice';

const Home = () => {
  const [searchPokemonName, setSearchPokemonName] = useState('');
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(12);
  const { data: pokemons, isLoading } = useGetPokemonsQuery({ offset, limit });

  return (
    <Container isApiLoading={isLoading}>
      <header className={styles.header}>
        <img src={PokemonLogo} alt="asdas" />
      </header>
      <div className={styles['home__form']}>
        <form onSubmit={(e) => e.preventDefault()}>
          <SearchBar
            type="text"
            value={searchPokemonName}
            placeholder="Search pokemon..."
            onChange={(e) => setSearchPokemonName(e.target.value)}
          />
        </form>
      </div>
      <div>
        <ul className={styles['home__pokemon-list']}>
          {pokemons?.results
            .filter((pokemon) => pokemon.name.toLowerCase().match(searchPokemonName.toLowerCase()))
            .map((pokemon, idx) => {
              return <PokemonCard key={idx} pokemon={pokemon} />;
            })}
        </ul>
      </div>
      <div className={styles['home__pagination']}>
        <Button
          type="primary"
          defaultProps={{
            onClick: () => setOffset((prev) => prev - limit),
            disabled: !pokemons?.previous,
          }}
        >
          Previous
        </Button>
        <Button
          type="primary"
          defaultProps={{
            onClick: () => setOffset((prev) => prev + limit),
            disabled: !pokemons?.next,
          }}
        >
          Next
        </Button>
      </div>
    </Container>
  );
};

export default Home;
