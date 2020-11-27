import { IState, TReducer, IAction } from './createStore';

type TReducersMap<S extends IState, AA extends IAction = IAction> = {
    [K in keyof S]: TReducer<S[K], AA>
}

const combineReducers = <S extends IState, A extends IAction>(
    reducers: TReducersMap<S, A>,
): TReducer<S, A> => {
    const reducerKeys = Object.keys(reducers);

    return function combination(state: S, action: A) {
        const nextState: Record<any, any> = {};

        for (let i = 0; i < reducerKeys.length; i++) {
            const key: string = reducerKeys[i];
            const previousStateForKey = state[key];
            const reducer = reducers[key];

            nextState[key] = reducer(previousStateForKey, action);
        }

        return nextState;
    };
};

export default combineReducers;
