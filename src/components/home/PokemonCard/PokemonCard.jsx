import { Link } from 'react-router-dom';
import { useGetPokemonByNameQuery } from '../../../services/slices/pokemonSlice';
import styles from './PokemonCard.module.css';
const PokemonCard = ({ pokemon }) => {
  const { data, isLoading } = useGetPokemonByNameQuery(pokemon.name);
  if (!isLoading)
    return (
      <li>
        <div className={styles['pokemon-card']}>
          <img src={data.sprites.front_default} alt="not found" />
          <p>{pokemon.name}</p>
          <Link to={`/detail/${pokemon.name}`}>Detail</Link>
        </div>
      </li>
    );
};

export default PokemonCard;
