import { getCompletedSurvey, getMain } from 'app/providers/router/routeConfig/routes';
import { NavLink, Navigate } from 'react-router-dom';
import ResultImg from 'shared/assets/img/result.svg';
import { useQuestionsCompleted } from 'shared/lib/hooks/useQuestionsCompited/useQuestionsCompited';
import { Button } from 'shared/ui/button/Button';

import cl from './ResultPage.module.scss';

function ResultPage() {
  const { isCompleted, makeQuestionsCompleted } = useQuestionsCompleted();

  const handleButtonClick = () => {
    makeQuestionsCompleted();
  };

  return isCompleted ? (
    <Navigate to={getCompletedSurvey()} />
  ) : (
    <main className={cl.ResultPage}>
      <div className={cl.imgContainer}>
        <ResultImg />
      </div>
      <div className={cl.feedbackBlock}>
        <h1 className={cl.title}>Спасибо за обратную связь!</h1>
        <h2 className={cl.subtitle}>Это поможет нам улучшить сервис</h2>
        <NavLink to={getMain()}>
          <Button onClick={handleButtonClick}>Перейти на платформу</Button>
        </NavLink>
      </div>
    </main>
  );
}

export default ResultPage;
