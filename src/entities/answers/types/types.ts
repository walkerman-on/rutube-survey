export interface IAnswer {
    questionID: number,
    answerID: number,
}

export interface IAnswersState {
    list: IAnswer[],
}