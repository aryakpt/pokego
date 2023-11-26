import React from "react";
import { useNavigate } from "react-router-dom";
import { homeRoutes } from "../../../routes";

// STYLES
import styles from "./HomePagination.module.css";
// UI
import { Button } from "../../../../../components";
import { useRouteParams } from "typesafe-routes/react-router";

const HomePagination = ({ pokemons }) => {
  const navigate = useNavigate();
  const queryParams = useRouteParams(homeRoutes.list);
  const { offset = 0 } = queryParams;

  const prevPageHandler = () => {
    const newQueryParams: typeof queryParams = {
      ...queryParams,
      limit: 12,
      offset: offset - 12,
    };
    navigate(homeRoutes.list(newQueryParams).$);
  };

  const nextPageHandler = () => {
    const newQueryParams: typeof queryParams = {
      ...queryParams,
      limit: 12,
      offset: offset + 12,
    };
    navigate(homeRoutes.list(newQueryParams).$);
  };

  return (
    <section className={styles.homePagination}>
      <Button
        variant="primary"
        disabled={!pokemons?.previous}
        onClick={prevPageHandler}
      >
        Previous
      </Button>
      <Button
        variant="primary"
        disabled={!pokemons?.next}
        onClick={nextPageHandler}
      >
        Next
      </Button>
    </section>
  );
};

export default HomePagination;
