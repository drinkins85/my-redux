import React from 'react';
import './Label.css';

export interface ILabelProps {
    value?: number,
}

export default function Label({ value }: ILabelProps): JSX.Element {
    return (
        <div className="Label">{value}</div>
    );
}
