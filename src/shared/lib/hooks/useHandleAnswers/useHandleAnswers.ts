import { useState } from "react";
import { IAnswer } from "entities/answers/types/types";

export interface IQuestionsCompletedReturn {
  answerState: IAnswer;
  setAnswerState: (state: IAnswer) => void;
}

export const useHandleAnswers = (): IQuestionsCompletedReturn => {
  const localStorageAnswerState = JSON.parse(
    localStorage.getItem("answersState")
  );

  const [answerState, setAnswerState] = useState(localStorageAnswerState);

  const setLocalStorageAnswerState = (state: IAnswer) => {
    localStorage.setItem("answersState", JSON.stringify(state));
    setAnswerState(state);
  };

  return {
    answerState,
    setAnswerState: setLocalStorageAnswerState,
  };
};
