import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ICustomer } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  //   template: `<p>tess</p>`,
})
export class CustomerListComponent implements OnInit {
  // filteredCustomers: any[] = [];
  filteredCustomers: ICustomer[] = [];
  customersOrderTotal: number = 0;
  currencyCode: string = 'USD';

  constructor() {}
  ngOnInit() {}
}
