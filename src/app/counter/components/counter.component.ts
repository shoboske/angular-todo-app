import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/types/app-state.interface';
import { currentNumberSelector, incrementSelector } from '../store/selectors';
import * as CounterActions from "../store/actions";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  currentNumber$: Observable<number>;
  increment$: Observable<number>;
  
  constructor(private store : Store<AppStateInterface>) {
    this.currentNumber$ = this.store.pipe(select(currentNumberSelector));
    this.increment$ = this.store.pipe(select(incrementSelector));
  }

  increment() {
    this.store.dispatch(CounterActions.incrementNumber());
  }

  decrement() {
    this.store.dispatch(CounterActions.decrementNumber());
    }
}
