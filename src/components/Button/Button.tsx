import React from 'react';
import './Button.css';

export interface IButtonProps {
    text: string;
    clickHandler?: () => void;
}

export default function Button({ text, clickHandler }: IButtonProps): JSX.Element {
    return <button type="button" onClick={clickHandler} className="Button">{text}</button>;
}
