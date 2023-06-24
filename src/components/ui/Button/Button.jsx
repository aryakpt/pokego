import React from 'react';
import styles from './Button.module.css';
import { PokeBall } from '../../../assets/image';

const Button = ({ children, defaultProps, className, variant = 'primary' }) => {
  return (
    <button
      className={`${styles.button} ${styles[`button-${variant}`]} ${
        styles[className]
      }`}
      {...defaultProps}
    >
      {children}
      <span className={styles.icon}>
        <img src={PokeBall} alt="" />
      </span>
    </button>
  );
};

export default Button;
