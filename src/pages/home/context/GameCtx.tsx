import React, {createContext, useContext, useState} from 'react';
import {PokemonListResultSchema} from '../api/schemas';
import {randomInteger} from '../../../utils/helpers';

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
  if (!context) throw new Error('useGameContext must be used within a GameProvider');
  return context;
};

interface GameProviderProps {
  children: React.ReactNode;
}

export interface LeaderboardData {
  playerName: string;
  points: number;
}
interface StateValue {
  playerName: string;
  isStart: boolean;
  isOver: boolean;
  countdown: number;
  currScore: number;
  questions: PokemonListResultSchema[];
  correctAnswer: PokemonListResultSchema;
}

const initialState: StateValue = {
  playerName: '',
  isStart: false,
  isOver: false,
  countdown: 60,
  currScore: 0,
  questions: [],
  correctAnswer: {
    name: '',
    url: '',
  },
};

export const GameProvider = (props: GameProviderProps) => {
  const {children} = props;
  const [state, setState] = useState<StateValue>(initialState);

  const startGame = () => {
    setState((prev) => ({...prev, isStart: true}));
  };

  const endGame = () => {
    setState((prev) => ({...prev, isOver: true}));
  };

  const resetGame = () => {
    const leaderboardData = localStorage.getItem('leaderboard');
    const newPlayer: LeaderboardData = {playerName: state.playerName, points: state.currScore};
    if (leaderboardData) {
      const newLeaderboardData = [...JSON.parse(leaderboardData), newPlayer];
      localStorage.setItem('leaderboard', JSON.stringify(newLeaderboardData));
    } else {
      localStorage.setItem('leaderboard', JSON.stringify([newPlayer]));
    }
    setState(initialState);
  };

  const createQuestion = (pokemons: PokemonListResultSchema[]) => {
    const slicedIdx = randomInteger(0, 95);
    const correctAnsIdx = randomInteger(0, 3);
    const questionList = pokemons.slice(slicedIdx, slicedIdx + 4);

    setState((prev) => ({
      ...prev,
      questions: [...questionList],
      correctAnswer: {...questionList[correctAnsIdx]},
    }));
  };

  const checkAnswer = (pokemonName: string) => {
    const {correctAnswer} = state;

    if (pokemonName === correctAnswer.name) {
      setState((prev) => ({
        ...prev,
        currScore: prev.currScore + 2,
      }));
      return true;
    } else {
      setState((prev) => ({
        ...prev,
        currScore: prev.currScore === 0 ? prev.currScore : prev.currScore - 0.5,
      }));
      return false;
    }
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
