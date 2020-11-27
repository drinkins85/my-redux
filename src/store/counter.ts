export interface ICounterState {
    value: number;
    step: number;
}

export const initialCounterState: ICounterState = {
    value: 0,
    step: 1,
};
