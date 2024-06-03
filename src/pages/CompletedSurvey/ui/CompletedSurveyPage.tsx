import cl from "./CompletedSurveyPage.module.scss"
import {NavLink, useNavigate} from "react-router-dom"
import { Button } from 'shared/ui/button/Button';
import { getMain } from 'app/providers/router/routeConfig/routes';
import CompletedImg from "shared/assets/img/completed.svg"
import { useEffect } from "react";

const CompletedSurveyPage = () => {
                useEffect(() => {
        document.title = "Опрос завершен";
        }, [])
    const navigate = useNavigate()
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
                <NavLink to={getMain()}>
                    <Button onClick={handleButtonClick}>Перейти на платформу</Button>
                </NavLink>
            </div>
        </main>
    );
};

export default CompletedSurveyPage;