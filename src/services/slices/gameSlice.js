import { createSlice } from '@reduxjs/toolkit';
import { randomInteger } from '../../utils';

export const defaultState = {
  isGameStart: false,
  isGameOver: false,
  countdown: 100,
  numOfQuestion: 0,
  score: 0,
};

const initialState = {
  data: [],
  isGameStart: false,
  isGameOver: false,
  countdown: 100,
  numOfQuestion: 0,
  score: 0,
  questions: [],
  answer: {},
};

export const gameSlice = createSlice({
  name: 'gameApi',
  initialState,
  reducers: {
    changeState: (state, { payload }) => {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key];
      });
      return state;
    },
    startGame: (state) => {
      return {
        ...state,
        ...defaultState,
        isGameStart: true,
      };
    },
    gameOver: (state) => {
      return {
        ...state,
        isGameStart: false,
        isGameOver: true,
      };
    },
    setQuestions: (state, { payload }) => {
      const slicedIdx = randomInteger(0, 95);
      const correctAnsIndex = randomInteger(0, 3);
      const questionList = payload.slice(slicedIdx, slicedIdx + 4);
      return {
        ...state,
        questions: [...questionList],
        answer: { ...questionList[correctAnsIndex] },
      };
    },
    checkAnswer: (state, { payload }) => {
      if (state.answer.name === payload) {
        setQuestions(state.data);
        return {
          ...state,
          score: state.score + 1,
          numOfQuestion: state.numOfQuestion + 1,
        };
      }
      setQuestions(state.data);
      return {
        ...state,
        numOfQuestion: state.numOfQuestion + 1,
      };
    },
  },
});

export const { changeState, startGame, setQuestions, checkAnswer, gameOver } =
  gameSlice.actions;
