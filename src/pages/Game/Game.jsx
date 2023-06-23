import React from 'react';
import { Container } from '../../components/layout';
import { Button } from '../../components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  startGame,
  setQuestions,
  changeState,
} from '../../services/slices/gameSlice';

import { useGetPokemonsQuery } from '../../services/slices/pokemonSlice';

import styles from './Game.module.css';
import { QuestionCard } from '../../components/game';

const Game = () => {
  const dispatch = useDispatch();
  const gameState = useSelector((state) => state.game);
  const { data: pokemons, isSuccess: isSuccessPokemons } = useGetPokemonsQuery({
    offset: 0,
    limit: 100,
  });

  const startTheGame = () => {
    if (isSuccessPokemons) {
      dispatch(changeState({ isGameLoading: true }));
      dispatch(startGame());
      dispatch(setQuestions(pokemons?.results));
      dispatch(changeState({ isGameLoading: false }));
    }
  };

  const beforeGame = (
    <div className={styles['pokemon-game__cover']}>
      <h1>Welcome to the "Guess the Pokemon" Game</h1>
      <div className={styles['pokemon-game__cover__rules']}>
        <h3>Rules:</h3>
        <ol>
          <li>Choose the most appropriate pokemon name.</li>
          <li>
            You will be given a clue in the form of pictures, abilities,
            movements, weight, and height of the pokemon
          </li>
          <li>You will be given 100 seconds to guess the Pokemon's name</li>
          <li>
            Correct answer, score increases 1. Wrong answer, no score reduction
            and continues on to the next question
          </li>
        </ol>
      </div>
      <div className={styles['pokemon-game__cover__btn']}>
        <Button
          defaultProps={{
            onClick: () => startTheGame(),
          }}
        >
          Start Game
        </Button>
      </div>
    </div>
  );

  return (
    <Container>
      <div className={styles['primary-button']}>
        <Link to={'/'}>
          <Button>Back</Button>
        </Link>
      </div>
      <div className={styles['pokemon-game__main']}>
        {!gameState.isStart && beforeGame}
        {gameState.isStart && gameState.answer && (
          <>
            <QuestionCard
              questions={gameState?.questions}
              answer={gameState?.answer}
            />
          </>
        )}
      </div>
    </Container>
  );
};

export default Game;
