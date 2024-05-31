import React from 'react';
import cl from "./QuestionsPage.module.scss"
import PhoneImg from "shared/assets/img/phone.svg"
import { Mark } from 'widgets/mark';
import { Button } from 'shared/ui/button/Button';

const QuestionsPage = () => {
    return (
        <main className={cl.QuestionsPage}>
            <section className={cl.questionsBlock}>
                <p className={cl.title}>Пожалуйста, ответьте на дополнительные вопросы.</p>
                <ul className={cl.questionsGroup}>
                    <li className={cl.questionsItem}>
                        <p className={cl.questionsText}>1. Как быстро вы получили ответ от клиентского сервиса RUTUBE?</p>
                        <Mark/>
                    </li>
                    <li className={cl.questionsItem}>
                        <p className={cl.questionsText}>1. Как быстро вы получили ответ от клиентского сервиса RUTUBE?</p>
                        <Mark/>
                    </li>
                </ul>
                <Button>Отправить ответы</Button>
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