interface IActionWithType {
    type: string,
}

interface ICreateStore<S> {
    getState: () => S,
    dispatch: (action: TAction) => void,
    subscribe: (cb: TCallback) => () => void
}

type TCallback = () => void;
type TAction = Partial<IActionWithType>;
type TReducer<S> = (action: TAction) => S;

export default function createStore<T>(reducer: TReducer<T>, initialState: T): ICreateStore<T> {
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
        state = reducer(action);
        listeners.forEach((listener) => {
            listener();
        });
    };

    return { getState, dispatch, subscribe };
}
