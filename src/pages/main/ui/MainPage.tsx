import React, { useEffect } from 'react';
import cl from "./MainPage.module.scss"
import { useQuestionsCompleted } from 'shared/lib/hooks/useQuestionsCompleted/useQuestionsCompleted';
import { useNavigate } from 'react-router-dom';
import { getFeedback } from 'app/providers/router/routeConfig/routes';

const MainPage = () => {
    const {isCompleted, isReviewed} = useQuestionsCompleted()
    const navigate = useNavigate()
    useEffect(() => {
        document.title = "RUTUBE";
        if (!isCompleted && !isReviewed) {
            navigate(getFeedback())
        }
    }, [isCompleted, isReviewed])


    return (
        <main className={cl.MainPage}>
            <span>Это главная страница RUTUBE</span>
        </main>
    );
};

export default MainPage;