import React, { useEffect, useReducer } from 'react';
import { TCounterActionType } from './actions/counterActions';
import configureStore from './store/configureStore';
import Button from './components/Button/Button';
import Label from './components/Label/Label';
import './App.css';

const store = configureStore();

export default function App(): JSX.Element {
    const [, forceRender] = useReducer((s) => s + 1, 0);
    const state = store.getState();
    const { value } = state.counter;

    function updateCounter(type: TCounterActionType) {
        store.dispatch({ type });
    }

    useEffect(() => {
        store.subscribe(() => { forceRender(); });
    }, []);

    return (
        <div className="App">
            <Label value={value} />
            <Button name="-" clickHandler={() => updateCounter('DEC')} />
            <Button name="+" clickHandler={() => updateCounter('INC')} />
        </div>
    );
}
