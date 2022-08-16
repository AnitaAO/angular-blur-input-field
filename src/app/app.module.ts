import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputFormatDirective } from './input-format.directive';



@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    InputFormatDirective,
  ],
  declarations: [ 
    AppComponent,

  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
