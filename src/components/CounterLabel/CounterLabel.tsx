import React from 'react';
import connect from '../../react-redux/Connect';
import { IAppState } from '../../store/configureStore';
import Label, { ILabelProps } from '../Label/Label';

interface ICounterLabelProps extends ILabelProps {
    count?: number;
}

function CounterLabel({ count }: ICounterLabelProps) {
    return <Label value={count} />;
}

type TPropsFromState = {
    count: number
}

function mapStateToProps(state: IAppState): TPropsFromState {
    return {
        count: state.counter.value,
    };
}

export default connect<
    ICounterLabelProps,
    IAppState,
    TPropsFromState
    >(mapStateToProps)(CounterLabel);
