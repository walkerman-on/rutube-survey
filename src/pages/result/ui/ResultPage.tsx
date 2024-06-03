import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ResultImg from "shared/assets/img/result.svg";
import cl from "./ResultPage.module.scss";
import { Button } from "shared/ui/button/Button";
import {
  getCompletedSurvey,
  getMain,
} from "app/providers/router/routeConfig/routes";
import { useQuestionsCompleted } from "shared/lib/hooks/useQuestionsCompleted/useQuestionsCompleted";

const ResultPage = () => {
  const navigate = useNavigate();

  const { isCompleted, isReviewed, makeResultReviewed } =
    useQuestionsCompleted();

  useEffect(() => {
    document.title = "Спасибо за обратную связь!";

    if (isCompleted && isReviewed) {
      navigate(getCompletedSurvey());
    } else {
      makeResultReviewed();
    }
  }, []);

  const handleButtonClick = () => {
    navigate(getMain());
  };

  return (
    <main className={cl.ResultPage}>
      <div className={cl.imgContainer}>
        <ResultImg />
      </div>
      <div className={cl.feedbackBlock}>
        <h1 className={cl.title}>Спасибо за обратную связь!</h1>
        <h2 className={cl.subtitle}>Это поможет нам улучшить сервис</h2>
        <Button onClick={handleButtonClick}>Перейти на платформу</Button>
      </div>
    </main>
  );
};

export default ResultPage;
