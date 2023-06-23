import { useState } from 'react';

import styles from './Home.module.css';
import { Container } from '../../components/layout';
import { SearchBar, Button } from '../../components';
import { PokemonCard } from '../../components/home';
import { PokemonLogo } from '../../assets/logo';

import { useGetPokemonsQuery } from '../../services/slices/pokemonSlice';
import { Link } from 'react-router-dom';

const Home = () => {
  const [searchPokemonName, setSearchPokemonName] = useState('');
  const [offset, setOffset] = useState(0);
  const [limit] = useState(12);
  const { data: pokemons, isFetching } = useGetPokemonsQuery({ offset, limit });

  return (
    <Container isApiLoading={isFetching}>
      <Link to={'/game'} className={styles['btn-game']}>
        <Button type="primary">Play Game!</Button>
      </Link>
      <header className={styles.header}>
        <img src={PokemonLogo} alt="asdas" />
      </header>
      <div className={styles['home__form']}>
        <form onSubmit={(e) => e.preventDefault()}>
          <SearchBar
            type="text"
            value={searchPokemonName}
            placeholder="Search pokemon just in this page..."
            onChange={(e) => setSearchPokemonName(e.target.value)}
          />
        </form>
      </div>
      <div className={styles['home__pokemon-list__section']}>
        <ul className={styles['home__pokemon-list']}>
          {pokemons?.results
            .filter((pokemon) => pokemon.name.toLowerCase().match(searchPokemonName.toLowerCase()))
            .map((pokemon, idx) => {
              if (pokemon) return <PokemonCard key={idx} pokemon={pokemon} />;
              return 'Not Found';
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
