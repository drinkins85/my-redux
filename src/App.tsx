import React from 'react';
import configureStore from './store/configureStore';
import Button from './components/Button/Button';
import Label from './components/Label/Label';
import Provider from './react-redux/Provider';
import './App.css';

const store = configureStore();

export default function App(): JSX.Element {
    return (
        <div className="App">
            <Provider store={store}>
                <Label />
                <Button name="-" type="DEC" />
                <Button name="+" type="INC" />
            </Provider>
        </div>
    );
}
