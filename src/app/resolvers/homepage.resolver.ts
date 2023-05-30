import { inject } from '@angular/core';
import { Observable, concatMap, map, of, take, timeout, timer } from 'rxjs';

import { SplashScreenStateService } from '../services/splash-screen-state.service';
import { ResolveFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { todosSelector } from '../modules/todo/store/todo.selectors';

export const homePageResolver: ResolveFn<Observable<boolean>> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const splashScreenStateService = inject(SplashScreenStateService);
  splashScreenStateService.show()
  const store = inject(Store).select(todosSelector);
  return timer(3200).pipe(
    concatMap(() => store.pipe(
      take(1),
      map(() => splashScreenStateService.stop()),
      map(() => of(true))
    ))
  )
}