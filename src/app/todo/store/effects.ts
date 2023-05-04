import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";

import * as TodosActions from "./actions";
import { TodosService } from "../services/todos.service";

@Injectable()
export class TodosEffects {

    constructor(private actions$: Actions, private todosService: TodosService) { }

    getTodos$ = createEffect(() => this.actions$.pipe(
        ofType(TodosActions.getTodos),
        mergeMap(() => {
            return this.todosService.getTodos().pipe(
                map(todos => TodosActions.getTodosSuccess({ todos })),
                catchError(error => of(TodosActions.getTodosFailure({ error: error.message })))
            )
        })
    ))
}