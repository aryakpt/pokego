import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useGetPokemonByNameQuery } from '../../services/slices/pokemonSlice';
import { checkAnswer } from '../../services/slices/gameSlice';
import { Button } from '../../components';
import { PokeBall } from '../../assets/image';
import styles from './gameQuestionCard.module.css';

const GameQuestionCard = () => {
  const gameState = useSelector((state) => state.game);
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const [inputAnswer, setInputAnswer] = useState('');
  const { data: currentAnswer, isSuccess } = useGetPokemonByNameQuery(
    gameState?.answer?.name
  );

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (inputAnswer) {
      dispatch(checkAnswer(inputAnswer));
      setMessage(
        inputAnswer !== gameState.answer.name
          ? `Sorry, you are wrong! The answer is ${gameState.answer.name}`
          : 'Congratulations, you are right!'
      );
      setInputAnswer('');
    } else {
      setMessage('Sorry, you must answer it first!');
    }
  };

  return (
    <section className={styles.cardQuestion}>
      <img
        src={isSuccess ? currentAnswer?.sprites?.front_default : PokeBall}
        alt={currentAnswer?.name}
        className={styles.imageQuestion}
      />
      <div className={styles.cardQuestionDetail}>
        <div className={styles.cardQuestionInformation}>
          <p>Point: {gameState.score}</p>
          <p>Time: {gameState.countdown} s</p>
        </div>
        <p className={styles.cardQuestionMessage}>{message}</p>
        <form onSubmit={onSubmitHandler} className={styles.cardQuestionForm}>
          <div className={styles.cardQuestionFormRadio}>
            {gameState.questions.map((question) => {
              return (
                <div
                  key={question.name}
                  className={styles.cardQuestionFormRadioItem}
                >
                  <input
                    type="radio"
                    name="answer_choice"
                    value={question.name}
                    onClick={(e) => setInputAnswer(e.target.value)}
                    disabled={gameState.isGameOver}
                  />
                  <label htmlFor="answer_choice">
                    {question.name.toUpperCase()}
                  </label>
                </div>
              );
            })}
          </div>
          <div className={styles.cardQuestionFormButton}>
            <Button type="submit" disabled={gameState.isGameOver}>
              Answer
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default GameQuestionCard;
