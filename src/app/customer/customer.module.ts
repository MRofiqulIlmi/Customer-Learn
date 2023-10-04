import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';

@NgModule({
  declarations: [CustomerComponent],
  imports: [CommonModule],
  providers: [CustomerComponent],
  exports: [CustomerComponent],
  //   bootstrap: [AppComponent],
})
export class AdminModule {}
