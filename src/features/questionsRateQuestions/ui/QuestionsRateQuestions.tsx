import { addAnswer } from 'entities/answers/model/slice/answersSlice';
import { FC } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector/useAppSelector';
import { IRateQuestion, RateQuestion } from 'shared/ui/rateQuestion';

//ID вопросов, которые ДОЛЖНЫ быть на этой странице
const IDs = [1, 2, 3, 4, 5, 6];

export const QuestionsRateQuestions: FC = () => {
  const dispatch = useAppDispatch();

  const { list: questionsList } = useAppSelector((state) => state?.questions);
  const { list: answersList } = useAppSelector((state) => state?.answers);

  const questions: IRateQuestion[] = questionsList
    .filter((item) => IDs.includes(item?.questionID))
    .map((item) => ({
      ...item,
      long: item?.responseVariants.some((response) => response.title.length > 2),
      answerID: answersList.find((answer) => answer.questionID === item?.questionID)?.answerID,
    }));

  const onClick = (questionID: number, responseVariantID: number) => {
    dispatch(addAnswer([questionID, responseVariantID]));
  };

  return (
    <>
      {questions?.map((item, index) => {
        return <RateQuestion question={item} key={index} onHandleClick={onClick} />;
      })}
    </>
  );
};
