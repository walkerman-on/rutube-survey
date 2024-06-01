import React from 'react';
import cl from "./CompletedSurveyPage.module.scss"
import {NavLink, Navigate} from "react-router-dom"
import { Button } from 'shared/ui/button/Button';
import { getMain } from 'app/providers/router/routeConfig/routes';
import CompletedImg from "shared/assets/img/completed.svg"

const CompletedSurveyPage = () => {
    return (
        <main className={cl.CompletedSurveyPage}>
            <div className={cl.imgContainer}>
                <CompletedImg/>
            </div>
            <div className={cl.feedbackBlock}>
                <p className={cl.firstText}>Вы уже прошли этот опрос</p>
                <p className={cl.secondText}>Спасибо, что делитесь мнением и помогаете нам быть лучше</p>
                <NavLink to={getMain()}>
                    <Button>Перейти на платформу</Button>
                </NavLink>
            </div>
        </main>
    );
};

export default CompletedSurveyPage;