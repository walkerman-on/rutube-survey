import { FC, useState } from 'react';
import cl from "./Rating.module.scss"
import classNames from 'classnames';

interface IRating {
    list: { id: number, title: string }[],
    onClick: (id:number) => void,
    long?: boolean,
    wrap?: boolean,
    description?: boolean
}

export const Rating:FC<IRating> = ({list, onClick, wrap, long, description}) => {
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

    
    const handleButtonClick = (id: number) => {
        setSelectedAnswer(id);
        onClick(id)
    };

    return (
       <>
        <ul className={classNames("", {[cl.listWrap]: wrap, [cl.list]: !wrap}, {[cl.listVertical]: long})}>
            {
                list?.map((item, index) =>
                  <li 
                      className={classNames(cl.item, { [cl.itemActive]: item.id === selectedAnswer, [cl.itemLong]: item?.title.length > 2})} 
                      key={index} 
                      onClick={() => handleButtonClick(item.id)}
                  >
                      {item.title}
                  </li>)
            }
            
        </ul>
        { description &&
            <p className={cl.descriptionRating}>
                <span className={cl.label}>Хуже некуда</span>
                <span className={cl.label}>Отлично</span>
            </p>
        }
       </>
)}

                        
                           