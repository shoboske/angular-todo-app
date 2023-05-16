import { Action, ActionReducer, MetaReducer, State } from '@ngrx/store';
import { Keys, localStorageSync, rehydrateApplicationState } from 'ngrx-store-localstorage';
const INIT_ACTION = "@ngrx/store/init";
const UPDATE_ACTION = "@ngrx/store/update-reducers";

import { AppStateInterface } from '../types/app-state.interface';
import { PayloadAction, storageActionType } from './actions';

export const mergeReducer = (state: State<AppStateInterface>, rehydratedState: State<AppStateInterface>, action: Action): State<AppStateInterface> => {
	if ((action.type === INIT_ACTION || action.type === UPDATE_ACTION) && rehydratedState) {
		state = { ...state, ...rehydratedState } as State<AppStateInterface>;
	}
	return state;
}

function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
	return localStorageSync({
		keys: ['counter', { todos: ['todos'] }], rehydrate: true,
		mergeReducer
	})(reducer);
}

function sessionStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
	return localStorageSync({
		keys: ['counter'], rehydrate: true,
		mergeReducer, storage: sessionStorage
	})(reducer);
}

const localStorageSyncTabsReducer = (reducer: ActionReducer<any>): ActionReducer<any> => (state: State<any>, action: Action): any => {
	const keys = ['todos'];

	const isPayloadAction = 'payload' in action;
	const payloadAction: PayloadAction = action as PayloadAction;

	if (action.type === storageActionType && isPayloadAction && keys.includes(payloadAction.payload as string)) {
		const rehydratedState = rehydrateApplicationState([payloadAction.payload] as Keys, localStorage, k => k, true);
		return { ...state, ...rehydratedState };
	}

	return localStorageSync({
		keys,
		rehydrate: true,
	})(reducer)(state, action);
};

export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer, sessionStorageSyncReducer, localStorageSyncTabsReducer];