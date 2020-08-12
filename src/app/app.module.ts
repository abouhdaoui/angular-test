import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PalindromeComponent } from './components/palindrome/palindrome.component';
import { ListPalindromeComponent } from './components/list-palindrome/list-palindrome.component';

@NgModule({
  declarations: [
    AppComponent,
    PalindromeComponent,
    ListPalindromeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
