import combineReducers from '../redux/combineReducers';
import counterReducer from './counterReducer';
import { IAppState } from '../store/configureStore';
import { IAction } from '../redux/createStore';

export default combineReducers<IAppState, IAction>({
    counter: counterReducer,
});
