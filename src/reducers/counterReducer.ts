import { ICounterState } from '../store/counter';
import { ICounterAction } from '../actions/counterActions';

export default function counterReducer(
    state: ICounterState,
    action: ICounterAction,
): ICounterState {
    switch (action.type) {
        case 'INC':
            return {
                ...state,
                value: state.value + 1,
            };
        case 'DEC':
            return {
                ...state,
                value: state.value - 1,
            };
        default:
            return state;
    }
};
