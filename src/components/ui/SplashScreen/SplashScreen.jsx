import React from 'react';
import styles from './SplashScreen.module.css';
import { PokeBall } from '../../../assets/image';
import { PokemonLogo } from '../../../assets/logo';

const SplashScreen = () => {
  return (
    <>
      <div className={styles['splash_screen']}></div>
      <div className={styles['splash_screen__content']}>
        <img className={styles['splash_screen__content__logo']} src={PokemonLogo} alt="" />
        <img className={styles['splash_screen__content__pokeball']} src={PokeBall} alt="" />
      </div>
    </>
  );
};

export default SplashScreen;
