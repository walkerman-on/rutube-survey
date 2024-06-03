import cl from "./CompletedSurveyPage.module.scss"
import {NavLink, useNavigate} from "react-router-dom"
import { Button } from 'shared/ui/button/Button';
import { getMain } from 'app/providers/router/routeConfig/routes';
import CompletedImg from "shared/assets/img/completed.svg"
import { useEffect } from "react";

const CompletedSurveyPage = () => {
              
    const navigate = useNavigate()
      useEffect(() => {
        document.title = "Опрос завершен";
        }, [])
    const handleButtonClick = () => {
        navigate(getMain())
    };

    return (
        <main className={cl.CompletedSurveyPage}>
            <div className={cl.imgContainer}>
                <CompletedImg/>
            </div>
            <div className={cl.feedbackBlock}>
                <h1 className={cl.title}>Вы уже прошли этот опрос</h1>
                <h2 className={cl.subtitle}>Спасибо, что делитесь мнением и помогаете нам быть лучше</h2>
                <Button onClick={handleButtonClick}>Перейти на RUTUBE</Button>
            </div>
        </main>
    );
};

export default CompletedSurveyPage;