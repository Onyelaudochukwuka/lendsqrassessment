import React, { ChangeEvent, FC } from 'react';

import style from './index.module.css';

interface IInput {
  placeholder: string;
  value: string | number ;
  setValue: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  type: string;
  clearValue: () => void;
  error?: boolean;
  errorMessage?: string;
  className?: string;
  label?: string;
}
const Input: FC<IInput> = ({
  placeholder,
  value,
  setValue,
  type,
  error = false,
  errorMessage = '',
  className,
  label,
}) => (
  <div className={`${style.Input} ${className}`}>
    {!!label && <div className={style.Input__label}>{label}</div>}
    <input
      className={`${style.Input__input} ${className}`}
      {...{ placeholder, value, type }}
      onChange={setValue}
    />

    {!!error && <p className={style.Input__error}>{errorMessage}</p>}
  </div>
);
Input.defaultProps = {
  error: false,
  errorMessage: '',
  className: '',
  label: '',
};
export default Input;
