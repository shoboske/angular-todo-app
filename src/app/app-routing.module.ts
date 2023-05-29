import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageResolver } from './resolvers/homepage.resolver';
import { AppComponent } from './app.component';

const routes: Routes = [
  // {path: '', component: AppComponent, pathMatch: 'prefix', resolve: { 'itemsList': () => inject(HomepageResolver).resolve()}},
  { path: 'todos', loadChildren: () => import('./modules/todo/todo.module').then(m => m.TodoModule), resolve: { 'itemsList': () => inject(HomepageResolver).resolve()} },
  { path: 'counter', loadChildren: () => import('./modules/counter/counter.module').then(m => m.CounterModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
