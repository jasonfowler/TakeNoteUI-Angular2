import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { WorkbookView }   from './components/workbookview';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule 
  ],
  declarations: [ WorkbookView ],
  bootstrap:    [ WorkbookView ]
})

export class AppModule { }