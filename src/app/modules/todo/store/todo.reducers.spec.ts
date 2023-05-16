import { initialState, reducers } from "./todo.reducers";
import * as TodoActions from "./todo.actions";
import { TodoInterface, TodosStateInterface } from "../types/todos-state.interface";

describe('TodoReducer', () => {
  it('should update isLoading to true when getTodos action is dispatched', () => {
    const action = TodoActions.getTodos();
    const state = reducers(initialState, action);
    expect(state.isLoading).toBeTrue();
  });

  it('should update todos and isLoading to false when getTodosSuccess action is dispatched', () => {
    const todos: TodoInterface[] = [/* Add sample todos here */];
    const action = TodoActions.getTodosSuccess({ todos });
    const state = reducers(initialState, action);
    expect(state.isLoading).toBeFalse();
    expect(state.todos).toEqual(todos);
  });

  it('should update isLoading and error when getTodosFailure action is dispatched', () => {
    const error = 'Sample error message';
    const action = TodoActions.getTodosFailure({ error });
    const state = reducers(initialState, action);
    expect(state.isLoading).toBeFalse();
    expect(state.error).toEqual(error);
  });

  it('should remove a todo when removeTodo action is dispatched', () => {
    const existingTodos: TodoInterface[] = [
      { id: 1, title: 'Todo 1', completed: false },
      { id: 2, title: 'Todo 2', completed: true },
    ];
    const todoToRemove = existingTodos[0];
    const initialStateWithTodos: TodosStateInterface = { ...initialState, todos: existingTodos };
    const action = TodoActions.removeTodo({ todo: todoToRemove });
    const state = reducers(initialStateWithTodos, action);
    expect(state.todos.length).toBe(1);
    expect(state.todos).not.toContain(todoToRemove);
  });
});
