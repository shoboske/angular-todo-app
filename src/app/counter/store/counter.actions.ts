import { createAction } from "@ngrx/store";

export const incrementNumber = createAction('[Counter] Increment number');

export const decrementNumber = createAction('[Counter] Decrement number');