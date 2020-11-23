import { IActionWithType } from '../redux/createStore';

export type TActionType = 'INC'|'DEC';

export interface IAction extends IActionWithType {
    type: TActionType
}
