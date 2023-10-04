import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CustomerComponent, CustomerListComponent],
  //   providers: [CustomerComponent],
  exports: [CustomerComponent],
  //   bootstrap: [AppComponent],
})
export class CustomerModule {}
