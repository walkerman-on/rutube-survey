import React, {useState} from 'react';
import cl from "./QuestionsPage.module.scss"
import PhoneImg from "shared/assets/img/phone.svg"
import { Mark } from 'widgets/mark';
import { Button } from 'shared/ui/button/Button';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector/useAppSelector';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {useEffect} from "react"
import { fetchQuestions } from 'entities/questions';

const QuestionsPage = () => {
    const {list, error} = useAppSelector(state => state.questions)

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchQuestions())
    }, [])

    const [btnState, setbtnState] = useState(true)
    
    return (
        <main className={cl.QuestionsPage}>
            <section className={cl.questionsBlock}>
                <p className={cl.title}>Пожалуйста, ответьте на дополнительные вопросы.</p>
                {error}
                <div className={cl.questionsGroup}>
                    {list &&
                        list?.map((item, index) => 
                            <div className={cl.questionsItem} key={index}>
                                <p className={cl.questionsText}>{index + 1}. {item?.title}*</p>
                                <Mark questionID={item?.qiestionID}/>
                            </div>)
                    }
                </div>
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