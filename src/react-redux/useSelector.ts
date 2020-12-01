import {
    useContext, useReducer, useRef, useEffect,
} from 'react';
import ReactReduxContext from './ReactReduxContext';
import { IState, IStore } from '../redux/createStore';

type TSelector<S = IState, T = any> = (state: S) => T;

export default function useSelector<S = IState, T = any>(selector: TSelector<S, T>): T {
    const store: IStore<S> = useContext(ReactReduxContext);

    if (!store) {
        throw new Error('Store is missing');
    }

    const [, forceRender] = useReducer((s) => s + 1, 0);

    const savedSelector = useRef<TSelector<S, T>>();
    const savedState = useRef<S>();
    const savedSelectedState = useRef<T>();
    const state = store.getState();
    let selectedState = savedSelectedState.current;

    if (state !== savedState.current || selector !== savedSelector.current) {
        selectedState = selector(state);
    }

    useEffect(() => {
        savedSelector.current = selector;
        savedState.current = state;
        savedSelectedState.current = selectedState;
    });

    useEffect(() => {
        const checkUpdates = () => {
            const newSelectedState = savedSelector.current(store.getState());

            if (newSelectedState === savedSelectedState.current) {
                return;
            }

            forceRender();
        };

        store.subscribe(checkUpdates);
    }, []);

    return selectedState;
}
