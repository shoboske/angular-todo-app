import { initialState, reducers } from "./counter.reducers";
import * as CounterActions from "./counter.actions";
import { CounterStateInterface } from "../types/counter-state.interface";

describe('CounterReducer', () => {
  it('should increment the current number correctly when incrementNumber action is dispatched', () => {
    const action = CounterActions.incrementNumber();;
    const newState = reducers(initialState, action);
    expect(newState.currentNumber).toBe(1);
    expect(newState.increment).toBe(1);
  });

  it('should decrement the current number correctly when decrementNumber action is dispatched', () => {
    const action = CounterActions.decrementNumber();
    const state: CounterStateInterface = { currentNumber: 10, increment: 1 };
    const newState = reducers(state, action);
    expect(newState.currentNumber).toBe(state.currentNumber - state.increment);
    expect(newState.increment).toBe(1);
  });
});