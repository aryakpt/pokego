// CORES
import React, { useState } from "react";
import { useRouteParams } from "typesafe-routes/react-router";
import { homeRoutes } from "../../routes";
import { Link } from "react-router-dom";

// STYLES
import styles from "./List.module.css";

// UIs
import { Container } from "../../../../components/layout";
import { Button } from "../../../../components";

import {
  HomeHeader,
  HomeSearchBar,
  HomePagination,
  HomePokemonList,
} from "./components";

// APIs
import { useGetPokemonsQuery } from "../../api";

const ListPage = () => {
  const queryParams = useRouteParams(homeRoutes.list);
  const { limit = 12, offset = 0 } = queryParams;

  const [searchPokemonName, setSearchPokemonName] = useState("");
  const { data: pokemons, isFetching } = useGetPokemonsQuery({
    offset,
    limit,
  });

  return (
    <Container isApiLoading={isFetching}>
      <Link to={"/game"} className={styles["btn-game"]}>
        <Button variant="primary">Play Game!</Button>
      </Link>
      <HomeHeader />
      <HomeSearchBar
        searchPokemonName={searchPokemonName}
        setSearchPokemonName={setSearchPokemonName}
      />
      <HomePokemonList
        pokemons={pokemons?.results || []}
        pokemonName={searchPokemonName}
      />
      <HomePagination pokemons={pokemons} />
    </Container>
  );
};

export default ListPage;
