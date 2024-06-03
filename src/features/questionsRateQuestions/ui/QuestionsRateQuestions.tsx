import { getQuestions } from 'app/providers/router/routeConfig/routes';
import { FC } from 'react';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector/useAppSelector';
import { RateQuestion } from 'widgets/rateQuestion';

//ID вопросов, которые ДОЛЖНЫ быть на этой странице
const IDs = [1, 2, 3, 4, 5, 6]

export const QuestionsRateQuestions:FC = () => {
    const {list} = useAppSelector(state => state?.questions)
    const questions = list.filter(item => IDs.includes(item?.questionID)).map((item) => ({
        ...item,
        long: item?.responseVariants.some(response => response.title.length > 2)
    }));


    return (
        <>
            {
                questions?.map((item, index) => {
                    return (
                        <RateQuestion question={item} linkTo={getQuestions()} long={item?.long} key={index}/>)
                    })
            }
        </>
            
    )
};
