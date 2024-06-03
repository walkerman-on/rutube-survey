import { FC } from "react";
import cl from "./RateQuestion.module.scss";
import classNames from "classnames";
import { Rating } from "shared/ui/rating";
import { IRateQuestion } from "shared/ui/rateQuestion/types/types";

interface IRateQuestionProps {
  question: IRateQuestion;
  onHandleClick: (questionID: number, responseVariantID: number) => void;
  wrap?: boolean;
  labelWrap?: boolean;
  description?: boolean;
}

export const RateQuestion: FC<IRateQuestionProps> = ({
  question,
  onHandleClick,
  wrap,
  labelWrap,
  description,
}) => {
  const list = question.responseVariants.map((item) => ({
    ...item,
    id: item.responseVariantID,
  }));

  const onClick = (responseVariantID: number) => {
    onHandleClick(question.questionID, responseVariantID);
  };

  return (
    <div>
      <p
        className={classNames({
          [cl.labelFeedbackPage]: labelWrap,
          [cl.labelQuestionPage]: !labelWrap,
        })}
      >
        {question?.title}
      </p>
      <Rating
        answerID={question.answerID}
        long={question.long}
        {...{ wrap, list, description, onClick }}
      />
    </div>
  );
};
