import React from 'react';
// STYLES
import styles from './homeSearchBar.module.css';
// UI
import { SearchBar } from '../../components';

const HomeSearchBar = ({ searchPokemonName, setSearchPokemonName }) => {
  return (
    <section className={styles['home__searchBar']}>
      <form onSubmit={(e) => e.preventDefault()}>
        <SearchBar
          type="text"
          value={searchPokemonName}
          placeholder="Search pokemon just in this page..."
          onChange={(e) => setSearchPokemonName(e.target.value)}
        />
      </form>
    </section>
  );
};

export default HomeSearchBar;
