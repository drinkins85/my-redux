import React from 'react';
import connect from '../../react-redux/Connect';
import { TDispatch } from '../../redux/createStore';
import { IAppState } from '../../store/configureStore';
import { TCounterActionType } from '../../actions/counterActions';
import Button, { IButtonProps } from '../Button/Button';

interface ICounterButtonProps extends IButtonProps {
    type: TCounterActionType;
    updateCounter?: (type: TCounterActionType) => void;
}

function CounterButton({ text, type, updateCounter }: ICounterButtonProps) {
    const clickHandler = () => { updateCounter(type); };

    return <Button text={text} clickHandler={clickHandler} />;
}

type TPropsFromDispatch = {
    updateCounter: (type: TCounterActionType) => void;
}

function mapDispatchToProps(dispatch: TDispatch): TPropsFromDispatch {
    return {
        updateCounter: (type) => {
            dispatch({ type });
        },
    };
}

export default connect<ICounterButtonProps, IAppState, undefined, TPropsFromDispatch>(
    undefined,
    mapDispatchToProps,
)(CounterButton);
