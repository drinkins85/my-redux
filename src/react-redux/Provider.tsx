import React from 'react';
import { IStore } from '../redux/createStore';
import ReactReduxContext from './ReactReduxContext';

interface IProviderProps {
    store: IStore;
    children: React.ReactNode;
}

export default function Provider({ store, children }: IProviderProps) {
    return <ReactReduxContext.Provider value={store}>{children}</ReactReduxContext.Provider>;
}
