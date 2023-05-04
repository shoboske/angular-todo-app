import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { delay } from 'rxjs';
import { TodoInterface } from '../types/todos-state.interface';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private httpClient: HttpClient) { }

  getTodos() {
    delay(2000);
    return this.httpClient.get<TodoInterface[]>('https://jsonplaceholder.typicode.com/users/1/todos');
  }
}
