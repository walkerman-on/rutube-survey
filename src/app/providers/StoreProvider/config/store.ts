import { configureStore } from '@reduxjs/toolkit';
import { answersReducer } from 'entities/answers';
import { questionsReducer } from 'entities/questions';

export const store = configureStore({
  reducer: {
    questions: questionsReducer,
    answers: answersReducer,
  },
});
