import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { homePageResolver } from './resolvers/homepage.resolver';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'todos' },
  { path: 'todos', loadChildren: () => import('./modules/todo/todo.module').then(m => m.TodoModule), resolve: { isReady: homePageResolver } },
  { path: 'counter', loadChildren: () => import('./modules/counter/counter.module').then(m => m.CounterModule), resolve: { isReady: homePageResolver }  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
