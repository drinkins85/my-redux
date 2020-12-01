import React from 'react';
import connect from '../../react-redux/Connect';
import './Button.css';
import { TDispatch } from '../../redux/createStore';
import { IAppState } from '../../store/configureStore';
import { TCounterActionType } from '../../actions/counterActions';

interface IButtonProps {
    name: string;
    type: TCounterActionType;
    updateCounter?: (type: TCounterActionType) => void;
}

function Button({ name, type, updateCounter }: IButtonProps): JSX.Element {
    return <button type="button" onClick={() => { updateCounter(type); }} className="Button">{name}</button>;
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

export default connect<IButtonProps, IAppState, undefined, TPropsFromDispatch>(
    undefined,
    mapDispatchToProps,
)(Button);
