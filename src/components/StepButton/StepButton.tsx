import React from 'react';
import useDispatch from '../../react-redux/useDispatch';
import Button, { IButtonProps } from '../Button/Button';
import { TCounterActionType } from '../../actions/counterActions';

interface IStepButtonProps extends IButtonProps {
    type: TCounterActionType;
}

export default function StepButton({ text, type }: IStepButtonProps) {
    const updateStep = useDispatch();

    function clickHandler() {
        updateStep({ type });
    }

    return <Button text={text} clickHandler={clickHandler} />;
}
