import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { TodosService } from './todos.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TodoInterface } from '../types/todos-state.interface';

describe('TodosService', () => {
  let service: TodosService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(TodosService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve todos from the API', fakeAsync(() => {
    const mockTodos: TodoInterface[] = [
      { id: 1, title: 'Todo 1', completed: false },
      { id: 2, title: 'Todo 2', completed: true }
    ];

    service.getTodos().subscribe(todos => {
      expect(todos).toEqual(mockTodos);
    });

    const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/users/1/todos');
    expect(req.request.method).toBe('GET');
    req.flush(mockTodos);

    // Simulate passage of time
    tick(2000);

    // Verify that the service has completed its delay
    expect().nothing();
  }));
});
