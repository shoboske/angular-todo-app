import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/types/app-state.interface";

export const selectFeature = (state: AppStateInterface) => state.todos;

export const isLoadingSelector = createSelector(selectFeature, state => state.isLoading);

export const todosSelector = createSelector(selectFeature, state => state.todos);

export const errorSelector = createSelector(selectFeature, state => state.error);