import { createSlice } from '@reduxjs/toolkit';
import { randomInteger } from '../../utils';

const initialState = {
  isStart: false,
  isGameOver: false,
  numOfQuestion: 0,
  score: 0,
  questions: [],
  answer: {},
  isGameLoading: false,
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
        isStart: true,
        numOfQuestion: state.numOfQuestion + 1,
      };
    },
    setQuestions: (state, { payload }) => {
      const slicedIdx = randomInteger(0, 95);
      const correctAnsIndex = randomInteger(0, 3);
      const questionList = payload.slice(slicedIdx, slicedIdx + 4);
      return {
        ...state,
        numOfQuestion: state.numOfQuestion + 1,
        questions: [...questionList],
        answer: { ...questionList[correctAnsIndex] },
      };
    },
  },
});

export const { changeState, startGame, setQuestions } = gameSlice.actions;
