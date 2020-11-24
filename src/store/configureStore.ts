import createStore, { IStore } from '../redux/createStore';
import counterReducer from '../reducers/counterReducer';
import { IAction } from '../actions/counterActions';

export interface IState {
    count: number;
}

const initialState: IState = {
    count: 0,
};

export default function configureStore(): IStore<IState, IAction> {
    return createStore(counterReducer, initialState);
}
