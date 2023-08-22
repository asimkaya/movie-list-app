import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'Movie App - Home' },
  { path: '**', component: HomeComponent, title: 'Movie App - Home' },
  { path: '', component: HomeComponent, title: 'Movie App - Home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
