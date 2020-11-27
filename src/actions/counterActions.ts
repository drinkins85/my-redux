import { IAction } from '../redux/createStore';

export type TCounterActionType = 'INC'|'DEC';

export interface ICounterAction extends IAction {
    type: TCounterActionType
}
