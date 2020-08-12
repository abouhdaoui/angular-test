import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PalindromeComponent} from './components/palindrome/palindrome.component';

const routes: Routes = [
  {path: 'start/:path',
    component: PalindromeComponent},
  {path: '',
    redirectTo: '/start/test',
    pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
