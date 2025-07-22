import React, {useState} from 'react';
import {useGetPokemonByNameQuery} from '../../../api';
import {Button} from '../../../../../components';
import {PokeBall} from '../../../../../assets/image';
import styles from './GameQuestionCard.module.css';
import {capitalizeFirstLetter} from '../../../../../utils/helpers';
import {useGameContext} from '../../../context/GameCtx';
import {PokemonListResultSchema} from '../../../api/schemas';

interface GameQuestionCardProps {
  pokemons: PokemonListResultSchema[];
}
const GameQuestionCard = (props: GameQuestionCardProps) => {
  const {pokemons} = props;
  const {state, checkAnswer, createQuestion} = useGameContext();
  const [message, setMessage] = useState(<></>);
  const {data: currentAnswer, isSuccess} = useGetPokemonByNameQuery(state?.correctAnswer?.name);

  const wrongMessage = (
    <p style={{color: 'red'}}>
      Sorry, you are wrong! The answer is <span style={{color: 'green'}}>{state.correctAnswer.name}</span>
    </p>
  );

  const correctMessage = <p style={{color: 'green'}}>Congratulations, you are right!</p>;

  const onCheckAnswer = (inputAnswer: string) => {
    if (inputAnswer) {
      const isCorrect = checkAnswer(inputAnswer);
      setMessage(isCorrect ? correctMessage : wrongMessage);
      createQuestion(pokemons);
    } else {
      setMessage(<p style={{color: 'blue'}}>Sorry, you must answer it first!</p>);
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
          <p>Point: {state.currScore}</p>
          <p>Time: {state.countdown} s</p>
        </div>
        <div className={styles.cardQuestionMessage}>{message}</div>
        <div className={styles.cardQuestionFormRadio}>
          {state.questions.map((question) => {
            return (
              <Button key={question.name} variant="primary" onClick={() => onCheckAnswer(question.name)}>
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
