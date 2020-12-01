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

// type TPropsFromState = {
//     count: number
// }
//
// function mapStateToProps(state: IAppState): TPropsFromState {
//     return {
//         count: state.counter.value,
//     };
// }

// export default connect<ILabelProps, IAppState, TPropsFromState>(mapStateToProps)(Label);
