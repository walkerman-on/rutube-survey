import { useState } from 'react';

export interface IQuestionsCompletedReturn {
  isCompleted: boolean;
  isReviewed: boolean;
  makeQuestionsCompleted: () => void;
  makeResultReviewed: () => void;
}

export const useQuestionsCompleted = (): IQuestionsCompletedReturn => {
  const questionsCompleted = localStorage.getItem('questionsCompleted');
  const resultReviewed = localStorage.getItem('resultReviewed');

  const [completed, setCompleted] = useState(questionsCompleted === 'true');
  const [reviewed, setReviewed] = useState(resultReviewed === 'true');

  const makeResultReviewed = () => {
    localStorage.setItem('resultReviewed', 'true');
    setReviewed(true);
  };

  const makeQuestionsCompleted = () => {
    localStorage.setItem('questionsCompleted', 'true');
    setCompleted(true);
  };

  return {
    isCompleted: completed,
    isReviewed: reviewed,
    makeQuestionsCompleted: makeQuestionsCompleted,
    makeResultReviewed: makeResultReviewed,
  };
};
