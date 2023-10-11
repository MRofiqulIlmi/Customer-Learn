import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { FilterTextBoxComponent } from './customer-list/filter-texbox.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  //commonModule for several functionality like ngFor directive, sharedModule for custom module have be done in shared file, formsmodule is for ngModel directive
  imports: [CommonModule, SharedModule, FormsModule],
  declarations: [
    CustomerComponent,
    CustomerListComponent,
    FilterTextBoxComponent,
  ],
  //   providers: [CustomerComponent],
  exports: [CustomerComponent],
  //   bootstrap: [AppComponent],
})
export class CustomerModule {}
