import React, { useState, useEffect } from 'react';

export interface IQuestionsCompletedReturn {
  isCompleted: boolean;
  makeQuestionsCompleted: () => void
}

export const useQuestionsCompleted = ():IQuestionsCompletedReturn => {
    const [completed, setCompleted] = useState(false);
    
    useEffect(() => {
        const questionsCompleted = localStorage.getItem('questionsCompleted');
        questionsCompleted === 'true' && setCompleted(true);
    }, []);

    const makeQuestionsCompleted = () => {
        localStorage.setItem('questionsCompleted', 'true');
        setCompleted(true);
    };

    return {
        isCompleted: completed,
        makeQuestionsCompleted: makeQuestionsCompleted
    }
}