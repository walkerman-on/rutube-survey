import { FC } from "react";
import { useAppSelector } from "shared/lib/hooks/useAppSelector/useAppSelector";
import { IRateQuestion, RateQuestion } from "shared/ui/rateQuestion";
import { addAnswer } from "entities/answers/model/slice/answersSlice";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

//ID вопросов, которые ДОЛЖНЫ быть на этой странице
const IDs = [0];

export const FeedbackRateQuestions: FC = () => {
  const dispatch = useAppDispatch();

  const { list: questionsList } = useAppSelector((state) => state?.questions);
  const { list: answersList } = useAppSelector((state) => state?.answers);

  const questions: IRateQuestion[] = questionsList
    .filter((item) => IDs.includes(item?.questionID))
    .map((item) => ({
      ...item,
      long: item?.responseVariants.some(
        (response) => response.title.length > 2
      ),
      answerID: answersList.find(
        (answer) => answer.questionID === item?.questionID
      ).answerID,
    }));

  const onClick = (questionID: number, responseVariantID: number) => {
    dispatch(addAnswer([questionID, responseVariantID]));
  };

  return (
    <>
      {questions?.map((item) => (
        <RateQuestion
          onHandleClick={onClick}
          question={item}
          key={item.questionID}
          wrap
          description
          labelWrap
        />
      ))}
    </>
  );
};
