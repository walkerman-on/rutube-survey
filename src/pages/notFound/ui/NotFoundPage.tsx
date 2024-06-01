import React from 'react';
import {NavLink} from "react-router-dom"
import cl from "./NotFoundPage.module.scss"
import { getFeedback, getMain } from 'app/providers/router/routeConfig/routes';
import { Button } from 'shared/ui/button/Button';

const NotFoundPage = () => {
    return (
        <main className={cl.NotFoundPage}>
            <span className={cl.mainText}>Ой! Такой страницы, к сожалению, не существует ((</span>
            <div className={cl.linksBlock}>
                <NavLink to={getMain()}>
                    <Button>Перейти на платформу</Button>
                </NavLink>
                    <p className={cl.text}>или</p>
                    <NavLink to={getFeedback()}>
                        <Button>Перейти к обратной связи</Button>
                    </NavLink>
            </div>
        </main>
    );
};

export default NotFoundPage;