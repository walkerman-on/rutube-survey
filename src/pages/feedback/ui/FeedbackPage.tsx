import cl from './FeedbackPage.module.scss';
import PeopleIcon from 'shared/assets/img/people.svg';
import { Navigate } from 'react-router-dom';
import { getCompletedSurvey } from 'app/providers/router/routeConfig/routes';
import { useQuestionsCompleted } from 'shared/lib/hooks/useQuestionsCompited/useQuestionsCompited';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useEffect } from 'react';
import { fetchQuestions } from 'entities/questions';
import { FeedbackRateQuestions } from 'features/feedbackRateQuestions/ui/FeedbackRateQuestions';

const FeedbackPage = () => {
  const { isCompleted } = useQuestionsCompleted();

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  return isCompleted ? (
    <Navigate to={getCompletedSurvey()} />
  ) : (
    <main className={cl.FeedbackPage}>
      <div className={cl.iconContainer}>
        <PeopleIcon className={cl.peopleIcon} />
      </div>
      <div className={cl.infoBlock}>
        <h1 className={cl.title}>Уважаемый клиент!</h1>
        <FeedbackRateQuestions />
      </div>
    </main>
  );
};

export default FeedbackPage;
