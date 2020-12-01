import { useContext } from 'react';
import ReactReduxContext from './ReactReduxContext';
import { IStore, IState } from '../redux/createStore';

export default function useDispatch<S extends IState = IState>() {
    const store: IStore<S> = useContext(ReactReduxContext);

    if (!store) {
        return () => {
            // eslint-disable-next-line no-console
            console.error('Store is missing');
        };
    }

    return store.dispatch;
}
