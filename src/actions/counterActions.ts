import { IAction } from '../redux/createStore';

export type TCounterActionType = 'COUNTER_INC'|'COUNTER_DEC'|'STEP_INC'|'STEP_DEC';

export interface ICounterAction extends IAction {
    type: TCounterActionType
}
