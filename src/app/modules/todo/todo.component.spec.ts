import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TodoInterface, TodosStateInterface } from './types/todos-state.interface';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { HttpClient } from '@angular/common/http';
import * as TodoActions from "./store/todo.actions";
import { of } from 'rxjs';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/todo.reducers';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let store: MockStore;


  const initialState: TodosStateInterface = {
    isLoading: false,
    todos: [],
    error: null
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [TodoComponent],
      providers: [
        provideMockStore({ initialState }),
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch getTodos action when ngOnInit is called with empty todos', () => {
    spyOn(store, 'dispatch');
    component.todos$ = of([]);
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledWith(TodoActions.getTodos());
  });

  it('should dispatch removeTodo action when removeTodo method is called', () => {
    spyOn(store, 'dispatch');
    const todo: TodoInterface = { id: 1, title: 'Test Todo', completed: false };
    component.removeTodo(todo);
    expect(store.dispatch).toHaveBeenCalledWith(TodoActions.removeTodo({ todo }));
  });
});
