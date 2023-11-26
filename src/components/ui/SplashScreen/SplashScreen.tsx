import React from "react";
import styles from "./SplashScreen.module.css";
import { PokeBall } from "../../../assets/image";
import { PokemonLogo } from "../../../assets/logo";

const SplashScreen = () => {
  return (
    <>
      <div className={styles.splachScreen}></div>
      <div className={styles.splachScreenContent}>
        <img
          className={styles.splachScreenContentLogo}
          src={PokemonLogo}
          alt=""
        />
        <img
          className={styles.splachScreenContentPokeball}
          src={PokeBall}
          alt=""
        />
      </div>
    </>
  );
};

export default SplashScreen;
