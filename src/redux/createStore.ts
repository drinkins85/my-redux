export interface IActionWithType {
    type: string,
}

export interface IStore<S> {
    getState: () => S,
    dispatch: (action: TAction) => void,
    subscribe: (cb: TCallback) => () => void
}

type TCallback = () => void;
export type TAction = Partial<IActionWithType>;
export type TReducer<T> = (state: T, action: TAction) => T;

export default function createStore<T>(reducer: TReducer<T>, initialState: T): IStore<T> {
    let state: T = initialState;
    let listeners: Array<TCallback> = [];

    const getState = () => state;

    const subscribe = (cb: TCallback) => {
        listeners.push(cb);

        return () => {
            listeners = listeners.filter((listener) => listener !== cb);
        };
    };

    const dispatch = (action: TAction) => {
        state = reducer(state, action);
        listeners.forEach((listener) => {
            listener();
        });
    };

    return { getState, dispatch, subscribe };
}
