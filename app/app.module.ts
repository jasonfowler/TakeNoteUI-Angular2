import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WorkbookView }   from './components/workbookview';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ WorkbookView ],
  bootstrap:    [ WorkbookView ]
})

export class AppModule { }