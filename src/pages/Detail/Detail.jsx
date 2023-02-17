import { useParams } from 'react-router-dom';
import { DefaultLayout, Container } from '../../components/layout';
import { PokemonDetailCard } from '../../components/detail';

import { useGetPokemonByNameQuery } from '../../services/slices/pokemonSlice';

const Detail = () => {
  const { pokemonName } = useParams();
  const { data: pokemon, isLoading } = useGetPokemonByNameQuery(pokemonName);

  if (!isLoading)
    return (
      <DefaultLayout>
        <Container>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <PokemonDetailCard pokemon={pokemon} />
          </div>
        </Container>
      </DefaultLayout>
    );
};

export default Detail;
