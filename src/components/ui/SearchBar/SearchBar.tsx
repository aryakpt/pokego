import React from "react";
import style from "./SearchBar.module.css";
import { PokeBall } from "../../../assets/image";

type SearchBarProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const SearchBar = (props: SearchBarProps) => {
  const { type, value, placeholder, onChange, className, ...restProps } = props;
  return (
    <div className={`${style.search__bar_container}`}>
      <input
        className={`${style.search__bar} ${className}`}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        {...restProps}
      />
      <img src={PokeBall} alt="" />
    </div>
  );
};

export default SearchBar;
