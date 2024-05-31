import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import cl from "./Mark.module.scss"
import { IQuestion } from 'entities/questions';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector/useAppSelector';
import classNames from 'classnames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { addAnswer } from 'entities/answers/model/slice/answersSlice';

// const markList:number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

interface IMark {
    linkTo?: string,
    questionID?: number,
    markList?: { responseVariantID: number, title: string }[][]
}

export const Mark:FC<IMark> = ({linkTo, markList, questionID}) => {
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

    const markLists = useAppSelector(state => state?.questions?.list)
    const marks = markLists?.filter(item => item?.qiestionID === questionID).map(item => item?.responseVariants)[0]
    
    const dispatch = useAppDispatch()
    
    const handleButtonClick = (responseVariantID: number) => {
        setSelectedAnswer(responseVariantID);
        dispatch(addAnswer([questionID, responseVariantID]))
    };



    return (
        <ul className={cl.markList}>
            {linkTo ?
                    marks?.map((item, index) =>
                        <NavLink to={linkTo}>
                           <li 
                                className={classNames(cl.markItem, { [cl.markItemActive]: item.responseVariantID === selectedAnswer })} 
                                key={index} 
                                onClick={() => handleButtonClick(item.responseVariantID)}
                            >
                                {item.title}
                            </li>
                        </NavLink>)
                 :
                  marks?.map((item, index) =>
                    <li 
                        className={classNames(cl.markItem, { [cl.markItemActive]: item.responseVariantID === selectedAnswer })} 
                        key={index} 
                        onClick={() => handleButtonClick(item.responseVariantID)}
                    >
                        {item.title}
                    </li>)
                }
        </ul>
)}

                        
                           