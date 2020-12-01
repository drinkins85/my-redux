import React, {
    useContext,
    useReducer,
    useRef,
    useEffect,
} from 'react';
import ReactReduxContext from './ReactReduxContext';
import shallowEqual from './shallowEqual';

type TMapDispatchToProps<S = any> = (state: S) => Record<any, any>;

type TDefaultPropsFromState = Record<any, any>;
type TDefaultPropsFromDispatch = Record<any, any>;

function connect<
    OwnComponentProps,
    State = any,
    PropsFromState = TDefaultPropsFromState,
    PropsFromDispatch = TDefaultPropsFromDispatch
    >(
    mapStateToProps: (state: State) => PropsFromState,
    mapDispatchToProps?: TMapDispatchToProps,
) {
    return function connectHoc(Component: React.ComponentType<OwnComponentProps>) {
        return function Wrapper(props: OwnComponentProps): JSX.Element {
            const store = useContext(ReactReduxContext);
            const [, forceRender] = useReducer((s) => s + 1, 0);

            const propsFromState: PropsFromState | TDefaultPropsFromState = typeof mapStateToProps === 'function' ? mapStateToProps(store.getState()) : {};
            const propsFromDispatch: PropsFromDispatch | TDefaultPropsFromDispatch = typeof mapDispatchToProps === 'function' ? mapDispatchToProps(store.dispatch) : {};

            const savedState = useRef<State>();
            const savedProps = useRef<PropsFromState | TDefaultPropsFromState>();
            const savedMapStateToPropsFunc = useRef<(state: State) => PropsFromState>();

            useEffect(() => {
                savedState.current = store.getState();
                savedProps.current = propsFromState;
                savedMapStateToPropsFunc.current = mapStateToProps;
            });

            useEffect(() => {
                const checkUpdates = function () {
                    const newPropsFromStore = (
                        savedMapStateToPropsFunc.current
                            ? savedMapStateToPropsFunc.current(store.getState())
                            : {}
                    );
                    const isPropsChanged = !shallowEqual(newPropsFromStore, savedProps.current);

                    if (isPropsChanged) {
                        forceRender();
                    }
                };

                return store.subscribe(checkUpdates);
            }, []);

            return (
                <Component
                    {...props as OwnComponentProps}
                    {...propsFromState}
                    {...propsFromDispatch}
                />
            );
        };
    };
}

export default connect;
