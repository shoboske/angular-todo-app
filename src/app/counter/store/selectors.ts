import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/types/app-state.interface";

export const selectFeature = (state: AppStateInterface) => state.counter;

export const currentNumberSelector = createSelector(selectFeature, state => state.currentNumber);

export const incrementSelector = createSelector(selectFeature , state => state.increment);