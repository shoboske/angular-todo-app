import { createReducer, on } from "@ngrx/store";
import { TodosStateInterface } from "../types/todos-state.interface";
import * as TodoActions from "./actions";

export const initialState: TodosStateInterface = {
    isLoading: false,
    todos: [],
    error: null
}

export const reducers = createReducer(initialState,
    on(TodoActions.getTodos, state => ({ ...state, isLoading: true })),
    on(TodoActions.getTodosSuccess, (state, action) => ({ ...state, isLoading: false, todos: action.todos })),
    on(TodoActions.getTodosFailure, (state, action) => ({ ...state, isLoading: false, error: action.error })),
    on(TodoActions.removeTodo, (state, action) => ({ ...state, todos: state.todos.filter(t => t.id != action.todo.id) }))
);