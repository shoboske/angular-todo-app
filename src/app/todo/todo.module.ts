import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/todo.reducers';
import { EffectsModule } from '@ngrx/effects';
import { TodosEffects } from './store/todo.effects';

@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    StoreModule.forFeature('todos', reducers),
    EffectsModule.forFeature([TodosEffects])
  ]
})
export class TodoModule { }
