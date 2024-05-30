import cl from "./FeedbackPage.module.scss"
import PeopleIcon from "shared/assets/img/people.svg"

const markList:number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const FeedbackPage = () => {
    return (
        <main className={cl.FeedbackPage}>
            <div className={cl.iconContainer} >
                <PeopleIcon className={cl.peopleIcon}/>
            </div>
            <div className={cl.infoBlock}>
                <p className={cl.firstText}>Уважаемый клиент!</p>
                <p className={cl.secondText}>Запрос закрыт. Пожалуйста, оцените качество предоставленного сервиса 
                    по данному обращению, используя шкалу от 0 до 9, где 0 является 
                    «Хуже некуда» и 9 — «Отлично».
                </p>
                <div className={cl.markBlock}>
                    <ul className={cl.markList}>
                        {markList?.map((item, index) => 
                            <li className={cl.markItem} key={index}>{item}</li>
                        )}
                    </ul>
                    <p className={cl.markText}>
                        <span className={cl.thirdText}>Хуже некуда</span>
                        <span className={cl.thirdText}>Отлично</span>
                    </p>
                </div>
            </div>
        </main>
    );
};

export default FeedbackPage;