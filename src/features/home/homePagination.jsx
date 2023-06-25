import React from 'react';
// STYLES
import styles from './homePagination.module.css';
// UI
import { Button } from '../../components';

const HomePagination = ({ pokemons, setOffset, limit }) => {
  return (
    <section className={styles['home__pagination']}>
      <Button
        type="primary"
        defaultProps={{
          onClick: () => setOffset((prev) => prev - limit),
          disabled: !pokemons?.previous,
        }}
      >
        Previous
      </Button>
      <Button
        type="primary"
        defaultProps={{
          onClick: () => setOffset((prev) => prev + limit),
          disabled: !pokemons?.next,
        }}
      >
        Next
      </Button>
    </section>
  );
};

export default HomePagination;
