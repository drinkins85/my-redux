import createStore, { IStore, IState, IAction } from '../redux/createStore';
import rootReducer from '../reducers/rootReducer';
import { ICounterState, initialCounterState } from './counter';

export interface IAppState extends IState {
    counter: ICounterState
}

const initialState: IAppState = {
    counter: initialCounterState,
};

export default function configureStore(): IStore<IAppState, IAction> {
    return createStore<IAppState, IAction>(rootReducer, initialState);
}
