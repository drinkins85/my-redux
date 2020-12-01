export interface IStore<S = IState, A = IAction> {
    getState: () => S,
    dispatch: TDispatch<A>,
    subscribe: (cb: TCallback) => () => void
}

export type TDispatch<A = IAction> = (action: A) => void;

export interface IActionWithType<T = any> {
    type: T
}

export interface IAction extends IActionWithType {
    [anyProps: string]: any
}

export interface IState {
    [key: string]: any
}

export type TReducer<S, A> = (state: S | undefined, action: A) => S;

type TCallback = () => void;

export default function createStore<S, A>(
    reducer: TReducer<S, A>,
    initialState: S,
): IStore<S, A> {
    let state: S = initialState;
    let listeners: Array<TCallback> = [];

    const getState = () => state;

    const subscribe = (cb: TCallback) => {
        listeners.push(cb);

        return () => {
            listeners = listeners.filter((listener) => listener !== cb);
        };
    };

    const dispatch = (action: A) => {
        state = reducer(state, action);
        listeners.forEach((listener) => {
            listener();
        });
    };

    return { getState, dispatch, subscribe };
}
