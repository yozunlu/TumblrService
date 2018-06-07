import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import {BlogService} from './blog.service';
import {EscapeHtmlPipe} from './keep-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EscapeHtmlPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
