import React from 'react';
import configureStore from './store/configureStore';
import CounterButton from './components/CounterButton/CounterButton';
import CounterLabel from './components/CounterLabel/CounterLabel';
import Provider from './react-redux/Provider';
import './App.css';

const store = configureStore();

export default function App(): JSX.Element {
    return (
        <div className="App">
            <Provider store={store}>
                <CounterLabel />
                <CounterButton text="-" type="DEC" />
                <CounterButton text="+" type="INC" />
            </Provider>
        </div>
    );
}
