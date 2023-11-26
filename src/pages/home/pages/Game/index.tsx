import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Game.module.css";

import { Container } from "../../../../components/layout";
import { Button } from "../../../../components";
import { GameQuestionCard, GameOverCard } from "./components";

import { useGetPokemonsQuery } from "../../api";
import { useGameContext } from "../../context/GameCtx";

import { paths } from "../../../../routes/paths";
import { homeRoutes } from "../../routes";

const GamePage = () => {
  const { state, setState, startGame, endGame, createQuestion } =
    useGameContext();

  const { data: pokemons, isSuccess: isSuccessPokemons } = useGetPokemonsQuery({
    offset: 0,
    limit: 100,
  });

  const gameStartHandler = () => {
    if (isSuccessPokemons) {
      createQuestion(pokemons?.results);
      startGame();
    }
  };

  useEffect(() => {
    if (state.isStart) {
      const timer = setInterval(() => {
        if (state.countdown >= 1) {
          setState((prev) => ({ ...prev, countdown: state.countdown - 1 }));
        } else {
          endGame();
        }
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [state.countdown, state.isStart]);

  const beforeGame = (
    <div className={styles.pokemonGameCover}>
      <h1>Welcome to the "Guess the Pokemon" Game</h1>
      <div className={styles.pokemonGameCoverRules}>
        <h3>Rules:</h3>
        <ol>
          <li>Choose the most appropriate pokemon name.</li>
          <li>
            You will be given a clue in the form of pictures, abilities, weight,
            and height of the pokemon
          </li>
          <li>You will be given 100 seconds to guess the Pokemon's name</li>
          <li>
            Correct answer, score increases 1. Wrong answer, no score reduction
            and continues on to the next question
          </li>
        </ol>
      </div>
      <div className={styles.pokemonGameCoverButton}>
        <Button variant="primary" onClick={gameStartHandler}>
          Start Game
        </Button>
      </div>
    </div>
  );

  const inGame = state.isOver ? (
    <GameOverCard />
  ) : (
    <GameQuestionCard pokemons={pokemons?.results || []} />
  );

  return (
    <Container>
      <Link
        className={styles.primaryButton}
        to={paths.home + homeRoutes.list({}).$}
      >
        <Button variant="primary">Quit Game</Button>
      </Link>
      <div className={styles.pokemonGame}>
        {state.isStart ? inGame : beforeGame}
      </div>
    </Container>
  );
};

export default GamePage;
