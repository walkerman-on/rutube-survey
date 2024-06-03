import { configureStore } from '@reduxjs/toolkit';
import { questionsReducer } from 'entities/questions';
import { answersReducer } from 'entities/answers';

export const store = configureStore({
  reducer: {
    questions: questionsReducer,
    answers: answersReducer,
  },
});
