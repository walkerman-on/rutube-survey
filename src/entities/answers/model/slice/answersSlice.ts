import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAnswersState } from '../../types/types';

const initialState: IAnswersState = {
  list: [],
};

const loadState = (): IAnswersState | undefined => {
  try {
    const serializedState = localStorage.getItem('answersState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state: IAnswersState): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('answersState', serializedState);
  } catch {
    console.log('Ошибка при сохранении ответов');
  }
};

export const answersSlice = createSlice({
  name: 'answers',
  initialState: loadState() || initialState,
  reducers: {
    addAnswer: (state: IAnswersState, action: PayloadAction<[questionID: number, answerID: number]>) => {
      const [questionID, answerID] = action.payload;
      const existingAnswerIndex = state.list.findIndex((answer) => answer?.questionID === questionID);

      if (existingAnswerIndex !== -1) {
        state.list[existingAnswerIndex].answerID = answerID;
      } else {
        state.list.push({ questionID: questionID, answerID: answerID });
      }

      saveState(state);
    },
  },
});

export const { addAnswer } = answersSlice.actions;
export default answersSlice.reducer;
