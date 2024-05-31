import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import cl from "./Mark.module.scss"

const markList:number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

interface IMark {
    linkTo?: string
}

export const Mark:FC<IMark> = ({linkTo}) => {
    return (
        <ul className={cl.markList}>
                {linkTo ?
                    markList?.map((item, index) =>
                        <NavLink to={linkTo} >
                            <li className={cl.markItem} key={index}>{item}</li>
                        </NavLink>)
                 :
                  markList?.map((item, index) =>
                    <li className={cl.markItem} key={index}>{item}</li>)
                }
        </ul>)
}

                        
                           