import { FC, memo, ButtonHTMLAttributes } from 'react';
import cl from './Button.module.scss';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<IButton> = memo((props) => {
  return (
    <button {...props} className={cl.Btn}>
      <span className={cl.text}>{props.children}</span>
    </button>
  );
});
