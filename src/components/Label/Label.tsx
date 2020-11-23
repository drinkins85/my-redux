import React from 'react';
import './Label.css';

interface ILabelProps {
    value: number|string;
}

export default function Label({ value }: ILabelProps): JSX.Element {
    return <div className="Label">{value}</div>;
}
