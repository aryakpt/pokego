import React from "react";
import styles from "./HomeSearchBar.module.css";
import { SearchBar } from "../../../../../components";

interface HomeSearchBarProps {
  searchPokemonName: string;
  setSearchPokemonName: React.Dispatch<React.SetStateAction<string>>;
}

const HomeSearchBar = (props: HomeSearchBarProps) => {
  const { searchPokemonName, setSearchPokemonName } = props;

  return (
    <section className={styles.homeSearchBar}>
      <form onSubmit={(e) => e.preventDefault()}>
        <SearchBar
          type="text"
          value={searchPokemonName}
          placeholder="Search pokemon just in this page..."
          onChange={(e) => setSearchPokemonName(e.target.value)}
          className={undefined}
          onSubmit={undefined}
        />
      </form>
    </section>
  );
};

export default HomeSearchBar;
