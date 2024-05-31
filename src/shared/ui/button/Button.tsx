import { FC, memo } from "react";
import cl from "./Button.module.scss"

export const Button:FC= memo((props) => {
    return (
        <button {...props} className = {cl.Btn}>
            {props.children}
        </button>
    );
});

