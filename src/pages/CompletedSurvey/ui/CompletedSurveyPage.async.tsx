import { lazy } from 'react';

export const CompletedSurveyPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      setTimeout(() => resolve(import('./CompletedSurveyPage')), 500);
    }),
);
