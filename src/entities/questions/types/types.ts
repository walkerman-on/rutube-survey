export interface IQuestion {
    qiestionID: number,
    title: string,
    responseVariants: [
        {
            responseVariantID: number,
            title: string
        }
    ]
}

export interface IQuestionsState {
    list: IQuestion[],
    error: string | null,
    loading: boolean,
}