import { ICounterState } from '../store/counter';
import { ICounterAction } from '../actions/counterActions';

export default function counterReducer(
    state: ICounterState,
    action: ICounterAction,
): ICounterState {
    switch (action.type) {
        case 'COUNTER_INC':
            return {
                ...state,
                value: state.value + state.step,
            };
        case 'COUNTER_DEC':
            return {
                ...state,
                value: state.value - state.step,
            };
        case 'STEP_INC':
            return {
                ...state,
                step: state.step + 1,
            };
        case 'STEP_DEC':
            return {
                ...state,
                step: state.step - 1,
            };
        default:
            return state;
    }
};
