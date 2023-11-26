import React from "react";
import styles from "./Detail.module.css";
import { useParams } from "react-router-dom";
import { Container } from "../../../../components/layout";
import { PokemonDetailCard } from "./components";
import { useGetPokemonByNameQuery } from "../../api";

const DetailPage = () => {
  const { pokemonName }: any = useParams();
  const { data: pokemon, isFetching } = useGetPokemonByNameQuery(pokemonName);

  return (
    <Container isApiLoading={isFetching}>
      <div className={styles.detailPage}>
        <PokemonDetailCard pokemon={pokemon} />
      </div>
    </Container>
  );
};

export default DetailPage;
