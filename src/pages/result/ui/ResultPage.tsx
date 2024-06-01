import React from 'react';
import {NavLink, Navigate} from "react-router-dom"
import ResultImg from "shared/assets/img/result.svg"
import cl from "./ResultPage.module.scss"
import { Button } from 'shared/ui/button/Button';
import { getCompletedSurvey, getMain } from 'app/providers/router/routeConfig/routes';
import { useQuestionsCompleted } from "shared/lib/hooks/useQuestionsCompited/useQuestionsCompited";


const ResultPage = () => {
    const {isCompleted, makeQuestionsCompleted} = useQuestionsCompleted()

    const handleButtonClick = () => {
        makeQuestionsCompleted();
    };
    
    return isCompleted ? (
        <Navigate to={getCompletedSurvey()} />
    ) : (
        <main className={cl.ResultPage}>
            <div className={cl.imgContainer}>
                <ResultImg/>
            </div>
            <div className={cl.feedbackBlock}>
                <p className={cl.firstText}>Спасибо за обратную связь!</p>
                <p className={cl.secondText}>Это поможет нам улучшить сервис</p>
                <NavLink to={getMain()}>
                    <Button onClick={handleButtonClick}>Перейти на платформу</Button>
                </NavLink>
            </div>
        </main>
    );
};

export default ResultPage;