/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Container } from '../components/layout';
import { Button } from '../components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  startGame,
  setQuestions,
  changeState,
  gameOver,
  defaultState,
} from '../services/slices/gameSlice';

import { useGetPokemonsQuery } from '../services/slices/pokemonSlice';

import styles from './gamePage.module.css';

import { GameQuestionCard, GameModal } from '../features/game';

const GamePage = () => {
  const dispatch = useDispatch();
  const gameState = useSelector((state) => state.game);
  const { data: pokemons, isSuccess: isSuccessPokemons } = useGetPokemonsQuery({
    offset: 0,
    limit: 100,
  });

  const startTheGame = () => {
    if (isSuccessPokemons) {
      dispatch(changeState({ data: pokemons.results }));
      dispatch(startGame());
      dispatch(setQuestions(pokemons?.results));
    }
  };

  useEffect(() => {
    if (gameState.isGameStart) {
      const timer = setInterval(() => {
        if (gameState.countdown >= 1) {
          dispatch(changeState({ countdown: gameState.countdown - 1 }));
        } else {
          dispatch(gameOver());
        }
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [gameState.countdown, gameState.isGameStart]);

  useEffect(() => {
    dispatch(setQuestions(gameState.data || pokemons?.results));
  }, [gameState.numOfQuestion]);

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

  const inGame = (
    <>
      {gameState.isGameOver ? (
        <GameModal pokemons={pokemons.results} />
      ) : (
        <GameQuestionCard />
      )}
    </>
  );

  return (
    <Container>
      <div className={styles['primary-button']}>
        <Link
          to={'/'}
          onClick={() => dispatch(changeState({ ...defaultState }))}
        >
          <Button>Quit Game</Button>
        </Link>
      </div>
      <div className={styles['pokemon-game__main']}>
        {!gameState.isGameStart && !gameState.isGameOver ? beforeGame : inGame}
      </div>
    </Container>
  );
};

export default GamePage;
