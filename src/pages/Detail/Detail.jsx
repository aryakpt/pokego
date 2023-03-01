import { useParams } from 'react-router-dom';
import { Container } from '../../components/layout';
import { PokemonDetailCard } from '../../components/detail';
import styles from './Detail.module.css';
import { useGetPokemonByNameQuery } from '../../services/slices/pokemonSlice';

const Detail = () => {
  const { pokemonName } = useParams();
  const { data: pokemon, isFetching } = useGetPokemonByNameQuery(pokemonName);

  return (
    <Container isApiLoading={isFetching}>
      <div className={styles['detail__page']}>
        <PokemonDetailCard pokemon={pokemon} />
      </div>
    </Container>
  );
};

export default Detail;
