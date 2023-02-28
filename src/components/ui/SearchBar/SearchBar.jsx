import React from 'react';
import style from './SearchBar.module.css';
import { PokeBall } from '../../../assets/image';

const SearchBar = ({ type, value, placeholder, onChange, className, onSubmit }) => {
  return (
    <div className={`${style.search__bar_container}`}>
      <input
        className={`${style.search__bar} ${className}`}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      <img src={PokeBall} alt="" />
    </div>
  );
};

export default SearchBar;
