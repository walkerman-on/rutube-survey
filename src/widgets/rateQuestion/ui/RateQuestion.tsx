import React, { FC, useState } from 'react';
import { NavLink, redirect, useNavigate } from 'react-router-dom';
import cl from "./RateQuestion.module.scss"
import { IQuestion } from 'entities/questions';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector/useAppSelector';
import classNames from 'classnames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { addAnswer } from 'entities/answers/model/slice/answersSlice';
import { Rating } from 'shared/ui/rating';

interface IRateQuestion {
    question: IQuestion,
    linkTo?: string,
    wrap?: boolean,
    labelWrap?: boolean,
    long?: boolean,
    description?: boolean
}

export const RateQuestion:FC<IRateQuestion> = ({linkTo, question, wrap, long, description,labelWrap}) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()

    const list = question?.responseVariants.map(item => ({
        ...item,
        id: item?.responseVariantID
    }))

    const onClick = (responseVariantID: number) => {
        dispatch(addAnswer([question?.questionID, responseVariantID]))
        if (linkTo) {
            navigate(linkTo)
        }
    };

    return (
        <div>
            <p className={classNames({[cl.labelFeedbackPage]: labelWrap, [cl.labelQuestionPage]: !labelWrap})}>{question?.title}</p>
            <Rating {...{wrap, long, list, description, onClick}} />
        </div>
           
)}

                        
                           