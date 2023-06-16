import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { Renderer2 } from '@angular/core';
import { AppComponent } from './app.component';
import { storageAction } from './store/actions';
import { SplashScreenStateService } from './services/splash-screen-state.service';
import { SplashComponent } from './components/splash/splash.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, SplashComponent],
      imports: [StoreModule.forRoot({}), RouterTestingModule], // Add any required imports for your store
      providers: [Renderer2, SplashScreenStateService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    spyOn(store, 'dispatch'); // Spy on the dispatch method of the store
    fixture.detectChanges();
  });

  it('should dispatch the storageAction when storage event is triggered', () => {
    const key = 'testKey';
    const event = new StorageEvent('storage', { key });
    window.dispatchEvent(event);
    fixture.detectChanges();
    expect(store.dispatch).toHaveBeenCalledWith(storageAction({ payload: key }));
  });
});
