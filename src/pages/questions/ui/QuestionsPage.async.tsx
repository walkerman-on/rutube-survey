import { lazy } from 'react';

export const QuestionsPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      setTimeout(() => resolve(import('./QuestionsPage')), 500);
    }),
);
