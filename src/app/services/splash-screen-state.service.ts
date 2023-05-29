import { Injectable } from '@angular/core';
import { Subscription, Subject, Observer } from 'rxjs';

@Injectable()
export class SplashScreenStateService {
   subject = new Subject();

   subscribe(onNext: Partial<Observer<unknown>> | ((value: unknown) => void) | undefined): Subscription {
      return this.subject.subscribe(onNext);
   }

   stop() {
      this.subject.next(false);
   }

}