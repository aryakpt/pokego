import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useGetPokemonByNameQuery } from '../../services/slices/pokemonSlice';
import { checkAnswer } from '../../services/slices/gameSlice';
import { Button } from '../../components';
import { PokeBall } from '../../assets/image';
import styles from './gameQuestionCard.module.css';
import { capitalizeFirstLetter } from '../../utils';

const GameQuestionCard = () => {
  const gameState = useSelector((state) => state.game);
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const { data: currentAnswer, isSuccess } = useGetPokemonByNameQuery(
    gameState?.answer?.name
  );

  const onCheckAnswer = (inputAnswer) => {
    if (inputAnswer) {
      dispatch(checkAnswer(inputAnswer));
      setMessage(
        inputAnswer !== gameState.answer.name
          ? `Sorry, you are wrong! The answer is ${gameState.answer.name}`
          : 'Congratulations, you are right!'
      );
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
      <div className={styles.questionDescription}>
        <div className={styles.questionDescriptionPhysic}>
          <span>{currentAnswer?.weight} lbs</span>
          <span>{currentAnswer?.height} inch</span>
        </div>
        <div className={styles.abilitiesList}>
          {currentAnswer?.abilities.map((ability) => {
            return (
              <span key={ability.ability.name} className={styles.abilityItem}>
                {capitalizeFirstLetter(ability.ability.name)}
              </span>
            );
          })}
        </div>
      </div>
      <div className={styles.cardQuestionDetail}>
        <div className={styles.cardQuestionInformation}>
          <p>Point: {gameState.score}</p>
          <p>Time: {gameState.countdown} s</p>
        </div>
        <p className={styles.cardQuestionMessage}>{message}</p>
        <div className={styles.cardQuestionFormRadio}>
          {gameState.questions.map((question) => {
            return (
              <Button
                defaultProps={{ onClick: () => onCheckAnswer(question.name) }}
              >
                {capitalizeFirstLetter(question.name)}
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GameQuestionCard;
