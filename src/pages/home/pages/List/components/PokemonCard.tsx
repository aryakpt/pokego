import React from "react";
import { Link } from "react-router-dom";
import styles from "./PokemonCard.module.css";
import { useGetPokemonByNameQuery } from "../../../api";
import { Elements } from "../../../constants";
import { PokemonListResultSchema } from "../../../api/schemas";
import { homeRoutes } from "../../../routes";

interface PokemonCardProps {
  pokemon: PokemonListResultSchema;
}

const PokemonCard = (props: PokemonCardProps) => {
  const { pokemon } = props;
  const { data, isFetching } = useGetPokemonByNameQuery(pokemon.name);
  if (!isFetching)
    return (
      <li>
        <Link
          to={homeRoutes.detail({ pokemonName: pokemon.name }).$}
          className={styles.pokemonCard}
        >
          <img
            src={data?.sprites?.front_default || undefined}
            alt="not found"
          />
          <div className={styles.pokemonCardDetail}>
            <p className={styles.pokemonCardName}>{pokemon.name}</p>
            <div className={styles.pokemonCardElement}>
              {data?.types.map((type, idx) => {
                if (idx < 4) {
                  return (
                    <img
                      key={type.slot}
                      className={styles.pokemonCardElementDetail}
                      src={Elements[type.type.name]}
                      alt={type.type.name}
                    />
                  );
                }
                return null;
              })}
            </div>
          </div>
          <div className={styles.pokemonCardOrder}>#{data?.order}</div>
        </Link>
      </li>
    );
};

export default PokemonCard;
