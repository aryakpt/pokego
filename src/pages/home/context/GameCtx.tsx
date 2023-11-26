import React, { createContext, useContext, useState } from "react";
import { PokemonListResultSchema } from "../api/schemas";
import { randomInteger } from "../../../utils/helpers";

interface GameContextValue {
  state: StateValue;
  startGame: () => void;
  endGame: () => void;
  resetGame: () => void;
  createQuestion: (pokemons: PokemonListResultSchema[]) => void;
  checkAnswer: (pokemonName: string) => boolean;
  setState: React.Dispatch<React.SetStateAction<StateValue>>;
}

const GameContext = createContext<GameContextValue | undefined>(undefined);

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context)
    throw new Error("useGameContext must be used within a GameProvider");
  return context;
};

interface GameProviderProps {
  children: React.ReactNode;
}

interface StateValue {
  isStart: boolean;
  isOver: boolean;
  countdown: number;
  currScore: number;
  questions: PokemonListResultSchema[];
  correctAnswer: PokemonListResultSchema;
}

const initialState: StateValue = {
  isStart: false,
  isOver: false,
  countdown: 60,
  currScore: 0,
  questions: [],
  correctAnswer: {
    name: "",
    url: "",
  },
};

export const GameProvider = (props: GameProviderProps) => {
  const { children } = props;
  const [state, setState] = useState<StateValue>(initialState);

  const startGame = () => {
    setState((prev) => ({ ...prev, isStart: true }));
  };

  const endGame = () => {
    setState((prev) => ({ ...prev, isOver: true }));
  };

  const resetGame = () => {
    setState(initialState);
  };

  const createQuestion = (pokemons: PokemonListResultSchema[]) => {
    const slicedIdx = randomInteger(0, 95);
    const correctAnsIdx = randomInteger(0, 3);
    const questionList = pokemons.slice(slicedIdx, slicedIdx + 4);

    setState((prev) => ({
      ...prev,
      questions: [...questionList],
      correctAnswer: { ...questionList[correctAnsIdx] },
    }));
  };

  const checkAnswer = (pokemonName: string) => {
    const { correctAnswer, currScore } = state;

    if (pokemonName === correctAnswer.name) {
      setState((prev) => ({
        ...prev,
        currScore: currScore + 1,
      }));
      return true;
    }
    return false;
  };

  const contextValue = {
    state,
    startGame,
    endGame,
    createQuestion,
    checkAnswer,
    setState,
    resetGame,
  };

  return <GameContext.Provider value={contextValue} children={children} />;
};
