import { getQuestions } from 'app/providers/router/routeConfig/routes';
import { FC } from 'react';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector/useAppSelector';
import { RateQuestion } from 'widgets/rateQuestion';

//ID вопроса, который НЕ должен быть на этой странице
const ID = 0

export const QuestionsRateQuestions:FC = () => {
    const {list} = useAppSelector(state => state?.questions)
    const questions = list.filter(item => item?.questionID !== ID);

    return (
        <>
            {
                questions?.map((item, index) => {
                    const hasLongResponseTitle = item?.responseVariants.some(response => response.title.length > 2)
                    return (
                        <RateQuestion question={item} linkTo={getQuestions()} long={hasLongResponseTitle} key={index}/>)
                    })
            }
        </>
            
    )
};
