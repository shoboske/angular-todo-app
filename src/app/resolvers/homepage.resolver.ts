import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { SplashScreenStateService } from '../services/splash-screen-state.service';

@Injectable({
  providedIn: 'root'
})
export class HomepageResolver {
  constructor(private splashScreenStateService: SplashScreenStateService) { }
  
  resolve(): Promise<Observable<any>> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
         this.splashScreenStateService.stop();
         resolve(of(['item1', 'item2']));
      }, 5000);
   });

  }
}
