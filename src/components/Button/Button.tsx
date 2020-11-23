import React from 'react';
import './Button.css';

interface IButtonProps {
    name: string;
    clickHandler: () => void;
}

export default function Button({ name, clickHandler }: IButtonProps): JSX.Element {
    return <button type="button" onClick={clickHandler} className="Button">{name}</button>;
}
