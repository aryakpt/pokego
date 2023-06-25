import { Link } from 'react-router-dom';
import styles from './PokemonDetailCard.module.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { capitalizeFirstLetter } from '../../../utils';

import { Elements } from '../../../constants/elements';

import { Button } from '../../';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const PokemonDetailCard = ({ pokemon }) => {
  const dataChart = {
    labels: pokemon?.stats.map((stat) =>
      capitalizeFirstLetter(stat.stat.name.split('-').join(' '))
    ),
    datasets: [
      {
        label: 'Pokemon Statictic',
        data: pokemon?.stats.map((stat) => stat.base_stat),
        backgroundColor: 'orange',
      },
    ],
  };

  const optionsChart = {
    indexAxis: 'y',
    responsive: true,
  };

  return (
    <>
      <div className={styles.backdrop}>
        <img
          src={
            pokemon?.sprites?.back_default
              ? pokemon?.sprites?.back_default
              : pokemon?.sprites?.back_shiny
          }
          alt="not found"
        />
      </div>
      <div className={styles['pokemon-detail-card']}>
        <div className={styles['pokemon-detail-card__header']}>
          <img
            src={
              pokemon?.sprites?.front_default
                ? pokemon?.sprites?.front_default
                : pokemon?.sprites?.front_shiny
            }
            alt="not found"
          />
          <div>
            <span className={styles.order}>#{pokemon?.order}</span>
            <span className={`${styles['detail-fisik']} ${styles.height}`}>
              {pokemon?.height} inch
            </span>
            <span className={`${styles['detail-fisik']} ${styles.weight}`}>
              {pokemon?.weight} lbs
            </span>
            <h3 className={styles['pokemon-detail-card__header__title']}>
              {pokemon?.name.toUpperCase()}
            </h3>
            <div className={styles['pokemon-detail-card__header__detail']}>
              <div className={styles['abilities__list']}>
                {pokemon?.abilities.map((ability) => {
                  return (
                    <span
                      key={ability.ability.name}
                      className={styles['ability__item']}
                    >
                      {capitalizeFirstLetter(ability.ability.name)}
                    </span>
                  );
                })}
              </div>
              <p>Species: {pokemon?.species?.name}</p>
              <div className={styles.elements}>
                {pokemon?.types.map((type) => {
                  return (
                    <img
                      key={type.type.name}
                      className={styles.element}
                      src={Elements[type.type.name]}
                      alt="Pokemon element"
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className={styles['pokemon-detail-card__body']}>
          <div className={styles['pokemon-detail-card__body__chart']}>
            <Bar data={dataChart} options={optionsChart} />
          </div>
          <Link to={'/'} style={{ textDecoration: 'none' }}>
            <Button type="primary">Back</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PokemonDetailCard;
