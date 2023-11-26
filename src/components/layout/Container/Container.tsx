import React from "react";
import styles from "./Container.module.css";
import SplashScreen from "../../ui/SplashScreen/SplashScreen";

const Container = ({ children, isApiLoading = false }) => {
  return (
    <>
      {isApiLoading && <SplashScreen />}
      <div className={styles.container}>{children}</div>
    </>
  );
};

export default Container;
