import React from 'react';
import connect from '../../react-redux/Connect';
import { IAppState } from '../../store/configureStore';

import './Label.css';

interface ILabelProps {
    count?: number,
}

function Label({ count }: ILabelProps): JSX.Element {
    return (
        <div className="Label">{count}</div>
    );
}

type TPropsFromState = {
    count: number
}

function mapStateToProps(state: IAppState): TPropsFromState {
    return {
        count: state.counter.value,
    };
}

export default connect<ILabelProps, IAppState, TPropsFromState>(mapStateToProps)(Label);
