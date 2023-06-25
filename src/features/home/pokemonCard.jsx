// CORES
import { Link } from 'react-router-dom';

// STYLES
import styles from './pokemonCard.module.css';

// API
import { useGetPokemonByNameQuery } from '../../services/slices/pokemonSlice';

// CONSTANTS
import { Elements } from '../../constants/elements';

const PokemonCard = ({ pokemon }) => {
  const { data, isFetching } = useGetPokemonByNameQuery(pokemon.name);
  if (!isFetching)
    return (
      <li>
        <Link to={`/detail/${pokemon.name}`} className={styles['pokemon-card']}>
          <img src={data.sprites.front_default} alt="not found" />
          <div className={styles['pokemon-card__detail']}>
            <p className={styles['pokemon-card__name']}>{pokemon.name}</p>
            <div className={styles['pokemon-card__element']}>
              {data?.types.map((type, idx) => {
                if (idx < 4) {
                  return (
                    <img
                      key={type.slot}
                      className={styles['pokemon-card__element-detail']}
                      src={Elements[type.type.name]}
                      alt={type.type.name}
                    />
                  );
                }
                return null;
              })}
            </div>
          </div>
          <div>#{data?.order}</div>
        </Link>
      </li>
    );
};

export default PokemonCard;
