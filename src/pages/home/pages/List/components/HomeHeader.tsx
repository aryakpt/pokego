import React from "react";
import styles from "./HomeHeader.module.css";
import { PokemonLogo } from "../../../../../assets/logo";

const HomeHeader = React.memo(() => {
  return (
    <header className={styles.homeHeader}>
      <img src={PokemonLogo} alt="pokemon logo" />
    </header>
  );
});

export default HomeHeader;
