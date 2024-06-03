import {NavLink, useNavigate} from "react-router-dom"
import cl from "./NotFoundPage.module.scss"
import { getFeedback, getMain } from 'app/providers/router/routeConfig/routes';
import { Button } from 'shared/ui/button/Button';
import { useEffect } from "react";

const NotFoundPage = () => {
        useEffect(() => {
        document.title = "Страница не найдена";
        }, [])
    
    const navigate = useNavigate()
    const handleButtonClick = () => {
        navigate(getFeedback())
    };
    return (
        <main className={cl.NotFoundPage}>
            <h1 className={cl.title}>Ой! Такой страницы, к сожалению, не существует ((</h1>
            <div className={cl.linksBlock}>
                <NavLink to={getMain()}>
                    <Button>Перейти на платформу</Button>
                </NavLink>
                <h2 className={cl.subtitle}>или</h2>
                <Button onClick={handleButtonClick}>Перейти к обратной связи</Button>
            </div>
        </main>
    );
};

export default NotFoundPage;