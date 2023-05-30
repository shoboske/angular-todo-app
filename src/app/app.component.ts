import { Component, OnInit, Renderer2 } from '@angular/core';
import { Store } from '@ngrx/store';
import { storageAction } from './store/actions';
import { SplashScreenStateService } from './services/splash-screen-state.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private renderer: Renderer2, private store: Store, private splashScreenStateService: SplashScreenStateService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.renderer.listen('window', 'storage', event => {
      this.store.dispatch(storageAction({ payload: event.key as string }));
    });
  }
}