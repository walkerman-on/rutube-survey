import React, { useState, useEffect } from 'react';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import cl from './QuestionsPage.module.scss';
import PhoneImg from 'shared/assets/img/phone.svg';
import { Button } from 'shared/ui/button/Button';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector/useAppSelector';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchQuestions } from 'entities/questions';
import { getCompletedSurvey, getMain, getResult } from 'app/providers/router/routeConfig/routes';
import { useQuestionsCompleted } from 'shared/lib/hooks/useQuestionsCompited/useQuestionsCompited';
import { QuestionsRateQuestions } from 'features/questionsRateQuestions';

const QuestionsPage: React.FC = () => {
            useEffect(() => {
        document.title = "Дополнительные вопросы";
        }, [])
    const { list, error } = useAppSelector((state) => state.questions);
    const answersList = useAppSelector((state) => state.answers.list);
    
    const [btnDisabled, setBtnDisabled] = useState(true);
    
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchQuestions());
    }, [dispatch]);
    
    useEffect(() => {
        setBtnDisabled( answersList.length !== list?.length)
    }, [answersList, list]);
    
    const {isCompleted} = useQuestionsCompleted()

    const navigate = useNavigate()
    const handleButtonClick = () => {
        console.log({ answersList });
        navigate(getResult())
    };

    return isCompleted ? (
        <Navigate to={getCompletedSurvey()} />
    ) : (
        <main className={cl.QuestionsPage}>
            <section className={cl.questionsBlock}>
                <h1 className={cl.title}>Пожалуйста, ответьте на дополнительные вопросы.</h1>
                {error}
                <QuestionsRateQuestions/>
            </section>
            <div className={cl.imgContainer}>
                <PhoneImg className={cl.icon} />
            </div>
            <Button disabled={btnDisabled} onClick={handleButtonClick}>
                Отправить ответы
            </Button>
        </main>
    );
};

export default QuestionsPage;
