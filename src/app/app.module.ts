import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { metaReducers } from './store/reducers';
import { SplashComponent } from './components/splash/splash.component';
import { SplashScreenStateService } from './services/splash-screen-state.service';
import { HomepageResolver } from './resolvers/homepage.resolver';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode(), trace: true }),
    EffectsModule.forRoot([])
  ],
  providers: [SplashScreenStateService, HomepageResolver],
  bootstrap: [AppComponent]
})

export class AppModule { }
