import cl from './FeedbackPage.module.scss';
import PeopleIcon from 'shared/assets/img/people.svg';
import { useNavigate } from 'react-router-dom';
import { getCompletedSurvey } from 'app/providers/router/routeConfig/routes';
import { useQuestionsCompleted } from 'shared/lib/hooks/useQuestionsCompleted/useQuestionsCompleted';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useEffect } from 'react';
import { fetchQuestions } from 'entities/questions';
import { FeedbackRateQuestions } from 'features/feedbackRateQuestions';

const FeedbackPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { isCompleted, isReviewed } = useQuestionsCompleted();

  useEffect(() => {
    document.title = 'Оценка качества';

    if (isCompleted && isReviewed) {
      navigate(getCompletedSurvey());
    }
  }, [isCompleted, isReviewed]);

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  if (isCompleted && isReviewed) {
    return null;
  }

  return (
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
