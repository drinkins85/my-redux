import React from 'react';
import Label from '../Label/Label';
import useSelector from '../../react-redux/useSelector';
import { IAppState } from '../../store/configureStore';

function stepSelector(state: IAppState): number {
    return state.counter.step;
}

export default function StepLabel() {
    const step = useSelector<IAppState, number>(stepSelector);

    return <Label value={step} />;
}
