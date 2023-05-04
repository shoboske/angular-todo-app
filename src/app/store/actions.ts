import { createAction, props, Action } from "@ngrx/store";

// actions.ts
export const storageActionType = '@ngrx/store/storage';

export const storageAction = createAction(
	storageActionType,
	props<{ payload: string }>()
);

export type PayloadAction = Action & {
	payload: unknown;
};