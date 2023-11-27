import React from "react";
import styles from "./SplashScreen.module.css";
import { PokeBall } from "../../../assets/image";
import { PokemonLogo } from "../../../assets/logo";

const SplashScreen = () => {
  return (
    <>
      <div className={styles.splashScreen}></div>
      <div className={styles.splashScreenContent}>
        <img
          className={styles.splashScreenContentLogo}
          src={PokemonLogo}
          alt=""
        />
        <img
          className={styles.splashScreenContentPokeball}
          src={PokeBall}
          alt=""
        />
      </div>
    </>
  );
};

export default SplashScreen;
