import React from 'react';
import configureStore from './store/configureStore';
import CounterButton from './components/CounterButton/CounterButton';
import CounterLabel from './components/CounterLabel/CounterLabel';
import StepLabel from './components/StepLabel/StepLabel';
import StepButton from './components/StepButton/StepButton';
import Provider from './react-redux/Provider';
import './App.css';

const store = configureStore();

export default function App(): JSX.Element {
    return (
        <div className="App">
            <Provider store={store}>
                <h3>Counter</h3>
                <CounterLabel />
                <CounterButton text="-" type="COUNTER_DEC" />
                <CounterButton text="+" type="COUNTER_INC" />
                <hr />
                <h3>Step</h3>
                <StepLabel />
                <StepButton text="-" type="STEP_DEC" />
                <StepButton text="+" type="STEP_INC" />
            </Provider>
        </div>
    );
}
