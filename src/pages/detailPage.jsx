import { useParams } from "react-router-dom";
import { Container } from "../components/layout";
import { PokemonDetailCard } from "../features/detail";
import styles from "./detailPage.module.css";
import { useGetPokemonByNameQuery } from "../services/slices/pokemonSlice";

const DetailPage = () => {
  const { pokemonName } = useParams();
  const { data: pokemon, isFetching } = useGetPokemonByNameQuery(pokemonName);

  return (
    <Container isApiLoading={isFetching}>
      <div className={styles["detail__page"]}>
        <PokemonDetailCard pokemon={pokemon} />
      </div>
    </Container>
  );
};

export default DetailPage;
