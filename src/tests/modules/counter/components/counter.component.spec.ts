import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { CounterComponent } from 'src/app/modules/counter/components/counter.component';
import { initialState } from 'src/app/modules/counter/store/counter.reducers';
import * as CounterActions from "src/app/modules/counter/store/counter.actions";
import { ComponentDriver } from 'src/tests/utils/component.driver';
import { componentTestingSetup } from 'src/tests/utils/component-testing.setup';



describe('CounterComponent', () => {
  let component: CounterComponent;
  let store: MockStore;
  let counterComponentDriver: ComponentDriver<CounterComponent>;

  function testingSetup() {
    return componentTestingSetup({
      componentClass: CounterComponent,
      driver: ComponentDriver<CounterComponent>,
      providers: [ provideMockStore({ initialState })]
    })
  }
  
  beforeEach(async () => {
    counterComponentDriver = testingSetup().createComponentDriver()
   
    component = counterComponentDriver.componentInstance;
    counterComponentDriver.detectChanges();

    store = counterComponentDriver.injector.get(MockStore)
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