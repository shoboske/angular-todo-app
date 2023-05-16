import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as TodoActions from './store/todo.actions';
import { errorSelector, isLoadingSelector, todosSelector } from './store/todo.selectors';
import { AppStateInterface } from '../../types/app-state.interface';
import { Observable } from 'rxjs';
import { TodoInterface } from './types/todos-state.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  isLoading$: Observable<boolean>;
  todos$: Observable<TodoInterface[]>;
  error$: Observable<string | null>;

  constructor(private store: Store<AppStateInterface>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.todos$ = this.store.pipe(select(todosSelector));
    this.error$ = this.store.pipe(select(errorSelector));
  }

  ngOnInit(): void {
    this.todos$.subscribe(t => {
      if (t.length < 1)
        this.store.dispatch(TodoActions.getTodos());
    })
  }

  removeTodo(todo: TodoInterface): void {
    this.store.dispatch(TodoActions.removeTodo({ todo }));
  }
}
