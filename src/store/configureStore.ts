import createStore, { IStore } from '../redux/createStore';
import counterReducer from '../reducers/counterReducer';
import { IState, initialState } from './state';

export default function configureStore(): IStore<IState> {
    return createStore(counterReducer, initialState);
}
