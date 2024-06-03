import React, { useEffect } from 'react';
import cl from "./MainPage.module.scss"

const MainPage = () => {
    useEffect(() => {
        document.title = "RUTUBE";
    }, [])

    return (
        <main className={cl.MainPage}>
            <span>Это главная страница RUTUBE</span>
        </main>
    );
};

export default MainPage;