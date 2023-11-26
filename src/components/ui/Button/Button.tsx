import React from "react";
import styles from "./Button.module.css";
import { PokeBall } from "../../../assets/image";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant: "primary";
}

const Button = (props: ButtonProps) => {
  const { className, children, variant, ...restProps } = props;
  return (
    <button
      className={`${styles.button} ${styles[`button-${variant}`]} ${className}`}
      {...restProps}
    >
      {children}
      <span className={styles.icon}>
        <img src={PokeBall} alt="" />
      </span>
    </button>
  );
};

export default Button;
