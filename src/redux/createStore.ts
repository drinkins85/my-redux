export interface IStore<T, S> {
    getState: () => T,
    dispatch: (action: S) => void,
    subscribe: (cb: TCallback) => () => void
}

type TCallback = () => void;

export type TReducer<T, S> = (state: T, action: S) => T;

export default function createStore<T, S>(reducer: TReducer<T, S>, initialState: T): IStore<T, S> {
    let state: T = initialState;
    let listeners: Array<TCallback> = [];

    const getState = () => state;

    const subscribe = (cb: TCallback) => {
        listeners.push(cb);

        return () => {
            listeners = listeners.filter((listener) => listener !== cb);
        };
    };

    const dispatch = (action: S) => {
        state = reducer(state, action);
        listeners.forEach((listener) => {
            listener();
        });
    };

    return { getState, dispatch, subscribe };
}
