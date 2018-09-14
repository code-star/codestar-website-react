import React, { ReactNode } from 'react';
import classNames from 'classnames/bind';
import style from './Button.module.css';

const cx = classNames.bind(style);

interface IButtonProps {
  variant: string;
  children: ReactNode;
}

const Button = ({ variant, children }: IButtonProps) => {
  return (
    <button
      className={cx('button', {
        buttonPrimary: variant === 'primary',
        buttonSecondary: variant === 'secondary',
        buttonTertiary: variant === 'tertiary',
      })}
    >
      {children}
    </button>
  );
};

export default Button;
