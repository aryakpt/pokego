import React from 'react';
import styles from './gameModal.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { startGame, setQuestions } from '../../services/slices/gameSlice';
import { Button } from '../../components';

const GameModal = ({ pokemons }) => {
  const dispatch = useDispatch();
  const gameState = useSelector((state) => state.game);
  const playAgain = () => {
    dispatch(startGame(pokemons));
    dispatch(setQuestions(pokemons));
  };
  return (
    <div className={styles.gameModal}>
      <h1>
        {gameState.score !== 0
          ? `Congratulation! You got ${gameState.score} Point`
          : "Don't give up, there are still many opportunities"}
      </h1>
      <div>
        <Button defaultProps={{ onClick: playAgain }}>Pay Again?</Button>
      </div>
    </div>
  );
};

export default GameModal;
