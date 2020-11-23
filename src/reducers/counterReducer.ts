import { TReducer } from '../redux/createStore';
import { IState } from '../store/state';
import { IAction } from '../actions/counterActions';

const counterReducer: TReducer<IState> = (state: IState, action: IAction) => {
    switch (action.type) {
        case 'INC':
            return {
                ...state,
                count: state.count + 1,
            };
        case 'DEC':
            return {
                ...state,
                count: state.count - 1,
            };
        default:
            return state;
    }
};

export default counterReducer;
