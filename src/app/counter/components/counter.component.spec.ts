import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { CounterStateInterface } from '../types/counter-state.interface';
import { initialState } from '../store/counter.reducers';
import { currentNumberSelector } from '../store/counter.selectors';
import * as CounterActions from "../store/counter.actions";

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let store: MockStore;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ],
      providers: [
        provideMockStore({ initialState }),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    store = TestBed.inject(MockStore)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment number', () => {
    spyOn(store, 'dispatch');
    component.increment();
    expect(store.dispatch).toHaveBeenCalledWith(CounterActions.incrementNumber());
  });

  it('should decrement number', () => {
    spyOn(store, 'dispatch');
    component.decrement();
    expect(store.dispatch).toHaveBeenCalledWith(CounterActions.decrementNumber());
  });


});
