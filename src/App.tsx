import React, { useEffect, useReducer } from 'react';
import { TActionType } from './actions/counterActions';
import configureStore from './store/configureStore';
import Button from './components/Button/Button';
import Label from './components/Label/Label';
import './App.css';

const store = configureStore();

export default function App(): JSX.Element {
    const [, forceRender] = useReducer((s) => s + 1, 0);
    const state = store.getState();
    const { count } = state;

    function updateCounter(type: TActionType) {
        store.dispatch({ type });
    }

    useEffect(() => {
        store.subscribe(() => { forceRender(); });
    }, []);

    return (
        <div className="App">
            <Label value={count} />
            <Button name="-" clickHandler={() => updateCounter('DEC')} />
            <Button name="+" clickHandler={() => updateCounter('INC')} />
        </div>
    );
}
