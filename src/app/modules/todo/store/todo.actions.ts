import { createAction, props } from "@ngrx/store";
import { TodoInterface } from "../types/todos-state.interface";

export const getTodos = createAction('[Todos] Get Todos');

export const getTodosSuccess = createAction('[Todos] Get Todos success', props<{ todos: TodoInterface[] }>());

export const getTodosFailure = createAction('[Todos] Get Todos failure', props<{ error: string }>());

export const removeTodo = createAction('[Todos] Remove Todo', props<{ todo: TodoInterface }>());