// CORES
import React from 'react';

// STYLES
import styles from './homeHeader.module.css';

// UI
import { PokemonLogo } from '../../assets/logo';

const HomeHeader = React.memo(() => {
  return (
    <header className={styles['home-header']}>
      <img src={PokemonLogo} alt="pokemon logo" />
    </header>
  );
});

export default HomeHeader;
