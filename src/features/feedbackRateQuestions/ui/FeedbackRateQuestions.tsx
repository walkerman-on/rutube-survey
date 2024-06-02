import { getQuestions } from 'app/providers/router/routeConfig/routes';
import { FC } from 'react';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector/useAppSelector';
import { RateQuestion } from 'widgets/rateQuestion';

//ID вопроса, который должен быть на этой странице
const ID = 0;

export const FeedbackRateQuestions: FC = () => {
  const { list } = useAppSelector((state) => state?.questions);
  const questions = list.filter((item) => item?.questionID === ID);

  return (
    <>
      {questions?.map((item, index) => (
        <RateQuestion question={item} key={index} linkTo={getQuestions()} wrap description labelWrap />
      ))}
    </>
  );
};
