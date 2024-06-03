import { IQuestion } from 'entities/questions';

export interface IRateQuestion extends IQuestion {
  answerID: number;
  long: boolean;
}
