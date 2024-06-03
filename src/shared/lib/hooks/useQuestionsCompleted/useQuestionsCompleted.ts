import React, { useState, useEffect } from 'react';

export interface IQuestionsCompletedReturn {
  isCompleted: boolean;
  isReviewed: boolean,
  makeQuestionsCompleted: () => void,
  makeResultReviewed: () => void,
}

export const useQuestionsCompleted = ():IQuestionsCompletedReturn => {
    const [completed, setCompleted] = useState(false);
    const [reviewed, setReviewed] = useState(false);
    
    useEffect(() => {
        const questionsCompleted = localStorage.getItem('questionsCompleted');
        const resultReviewed = localStorage.getItem('resultReviewed');
        questionsCompleted === 'true' && setCompleted(true);
        resultReviewed === 'true' && setReviewed(true);
        console.log({questionsCompleted, resultReviewed})
    }, []);

    const makeResultReviewed = () => {
        localStorage.setItem('resultReviewed', 'true');
        setReviewed(true);
    };

    const makeQuestionsCompleted = () => {
        localStorage.setItem('questionsCompleted', 'true');
        setCompleted(true);
    };
        console.log({completed, reviewed})

    return {
        isCompleted: completed,
        isReviewed: reviewed,
        makeQuestionsCompleted: makeQuestionsCompleted,
        makeResultReviewed: makeResultReviewed,
    }
}