import React from "react";
import styles from "./GameOverCard.module.css";
import { Button } from "../../../../../components";
import { useGameContext } from "../../../context/GameCtx";

const GameOverCard = () => {
  const { state, resetGame } = useGameContext();

  return (
    <div className={styles.gameOverCard}>
      <h1>
        {state.currScore !== 0
          ? `Congratulation! You got ${state.currScore} Point`
          : "Don't give up, there are still many opportunities"}
      </h1>
      <div>
        <Button variant="primary" onClick={resetGame}>
          Play Again?
        </Button>
      </div>
    </div>
  );
};

export default GameOverCard;
