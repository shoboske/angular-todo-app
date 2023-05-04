import { createReducer, on } from "@ngrx/store";
import { CounterStateInterface } from "../types/counter-state.interface";
import * as CounterActions from "./actions";

const initialState: CounterStateInterface = {
    currentNumber: 0,
    increment: 1
}

export const reducers = createReducer(initialState,
    on(CounterActions.incrementNumber, (state) => ({ ...state, currentNumber: state.currentNumber + state.increment })),
    on(CounterActions.decrementNumber, (state) => ({ ...state, currentNumber: state.currentNumber - state.increment }))
)