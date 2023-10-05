import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { FilterTextBoxComponent } from './customer-list/filter-texbox.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CustomerComponent, CustomerListComponent, FilterTextBoxComponent],
  //   providers: [CustomerComponent],
  exports: [CustomerComponent],
  //   bootstrap: [AppComponent],
})
export class CustomerModule {}
