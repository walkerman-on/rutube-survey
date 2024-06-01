import React, { useState, useEffect } from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import cl from './QuestionsPage.module.scss';
import PhoneImg from 'shared/assets/img/phone.svg';
import { Mark } from 'widgets/mark';
import { Button } from 'shared/ui/button/Button';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector/useAppSelector';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchQuestions } from 'entities/questions';
import { getCompletedSurvey, getMain, getResult } from 'app/providers/router/routeConfig/routes';
import { useQuestionsCompleted } from 'shared/lib/hooks/useQuestionsCompited/useQuestionsCompited';

const QuestionsPage: React.FC = () => {
    const { list, error } = useAppSelector((state) => state.questions);
    const answersList = useAppSelector((state) => state.answers.list);
    
    const [btnState, setBtnState] = useState(true);
    
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchQuestions());
    }, [dispatch]);
    
    useEffect(() => {
        answersList.length === 6 ?  setBtnState(false) : setBtnState(true)
    }, [answersList]);
    
    const {isCompleted} = useQuestionsCompleted()

    const handleButtonClick = () => {
        console.log({ answersList });
    };

    return isCompleted ? (
        <Navigate to={getCompletedSurvey()} />
    ) : (
        <main className={cl.QuestionsPage}>
            <section className={cl.questionsBlock}>
                <p className={cl.title}>Пожалуйста, ответьте на дополнительные вопросы.</p>
                {error}
                <div className={cl.questionsGroup}>
                    {list &&
                        list.map((item, index) => (
                            <div className={cl.questionsItem} key={index}>
                                <p className={cl.questionsText}>{index + 1}. {item?.title}*</p>
                                <Mark questionID={item?.qiestionID} />
                            </div>
                        ))}
                </div>
                <NavLink to={getResult()}>
                    <Button disabled={btnState} onClick={handleButtonClick}>
                        Отправить ответы
                    </Button>
                </NavLink>
            </section>
            <section className={cl.imgBlock}>
                <div className={cl.imgContainer}>
                    <PhoneImg className={cl.icon} />
                </div>
            </section>
        </main>
    );
};

export default QuestionsPage;
