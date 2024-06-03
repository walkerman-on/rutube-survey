import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cl from "./QuestionsPage.module.scss";
import PhoneImg from "shared/assets/img/phone.svg";
import { Button } from "shared/ui/button/Button";
import { useAppSelector } from "shared/lib/hooks/useAppSelector/useAppSelector";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchQuestions } from "entities/questions";
import {
  getCompletedSurvey,
  getFeedback,
  getResult,
} from "app/providers/router/routeConfig/routes";
import { useQuestionsCompleted } from "shared/lib/hooks/useQuestionsCompleted/useQuestionsCompleted";
import { QuestionsRateQuestions } from "features/questionsRateQuestions";

const QuestionsPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [btnDisabled, setBtnDisabled] = useState(true);

  const { list: questionsList, error } = useAppSelector(
    (state) => state.questions
  );
  const { list: answersList } = useAppSelector((state) => state.answers);

  const { isCompleted, isReviewed, makeQuestionsCompleted } =
    useQuestionsCompleted();

  useEffect(() => {
    if (!answersList.length) {
      navigate(getFeedback());
    }
  }, [answersList]);

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  useEffect(() => {
    setBtnDisabled(answersList.length !== questionsList?.length);
  }, [answersList, questionsList]);

  useEffect(() => {
    document.title = "Дополнительные вопросы";

    if (isCompleted && isReviewed) {
      navigate(getCompletedSurvey());
    }
  }, [isCompleted, isReviewed]);

  const handleButtonClick = () => {
    makeQuestionsCompleted();
    navigate(getResult());

    console.log({ answersList });
  };

  return (
    <main className={cl.QuestionsPage}>
      <section className={cl.questionsBlock}>
        <h1 className={cl.title}>
          Пожалуйста, ответьте на дополнительные вопросы.
        </h1>
        {error}
        <QuestionsRateQuestions />
      </section>
      <div className={cl.imgContainer}>
        <PhoneImg className={cl.icon} />
      </div>
      <Button disabled={btnDisabled} onClick={handleButtonClick}>
        Отправить ответы
      </Button>
    </main>
  );
};

export default QuestionsPage;
