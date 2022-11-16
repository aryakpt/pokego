/* eslint-disable jsx-a11y/img-redundant-alt */
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
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PokemonDetailCard = ({ pokemon }) => {
  const dataChart = {
    labels: pokemon.stats.map((stat) => stat.stat.name),
    datasets: [
      {
        label: 'Pokemon Statictic',
        data: pokemon.stats.map((stat) => stat.base_stat),
        backgroundColor: 'orange',
      },
    ],
  };

  const optionsChart = {
    indexAxis: 'y',
    responsive: true,
  };

  return (
    <div className={styles['pokemon-detail-card']}>
      <div className={styles['pokemon-detail-card__header']}>
        <img
          src={
            pokemon.sprites.front_default
              ? pokemon.sprites.front_default
              : pokemon.sprites.front_shiny
          }
          alt="image not found"
        />
      </div>
      <div className={styles['pokemon-detail-card__body']}>
        <h2 className={styles['pokemon-detail-card__body__title']}>{pokemon.name.toUpperCase()}</h2>
        <div className={styles['pokemon-detail-card__body__detail']}>
          <p>
            Abilities:{' '}
            {pokemon.abilities
              .map((ability) => {
                return ability.ability.name;
              })
              .join(', ')}
          </p>
          <p>Height: {pokemon.height}</p>
          <p>Species: {pokemon.species.name}</p>
          <Bar data={dataChart} options={optionsChart} />
        </div>
      </div>
      <div>
        <Link to={'/'}>Back</Link>
      </div>
    </div>
  );
};

export default PokemonDetailCard;
