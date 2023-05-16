import { State } from '@ngrx/store';
import { AppStateInterface } from '../types/app-state.interface';
import { metaReducers, mergeReducer } from './reducers';

describe('Reducers', () => {
  describe('mergeReducer', () => {
    it('should merge rehydrated state with current state', () => {
        const initialState:any= {}
      const rehydratedState: any = { /* rehydrated state here */ };
      const action = { type: '@ngrx/store/init' };

      const nextState = mergeReducer(initialState, rehydratedState, action);
      console.log(nextState)
      // Perform your assertions to ensure the state merging is correct
      // For example:
      expect(nextState).toEqual({...initialState, ...rehydratedState });
    });
  });
});
