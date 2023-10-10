import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ICustomer } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  //   template: `<p>tess</p>`,
})
export class CustomerListComponent implements OnInit {
  // filteredCustomers: any[] = [];
  filteredCustomers: ICustomer[] = [];
  customersOrderTotal: number = 0;
  currencyCode: string = 'USD';

  // @ input decorator getter and setter use for manipulate the private variable when any input comes in.
  private _customers: ICustomer[] = [];
  @Input() get customers(): ICustomer[] {
    return this._customers;
  }

  set customers(value: ICustomer[]) {
    if (value) {
      this.filteredCustomers = this._customers = value;
      this.calculateOrders();
    }
  }

  constructor() {}
  ngOnInit() {
    //this is only for the test : is the component was render properly. The data will put on different way, also the customersOrderTotal.
    // this.filteredCustomers = [
    //   {
    //     id: 1,
    //     name: 'john Doe',
    //     city: 'Phoenix',
    //     orderTotal: 9.99,
    //     customerSince: new Date(2014, 7, 10),
    //   },
    //   {
    //     id: 2,
    //     name: 'Jane Doe',
    //     city: 'Chandler',
    //     orderTotal: 19.99,
    //     customerSince: new Date(2017, 2, 22),
    //   },
    //   {
    //     id: 3,
    //     name: 'Michelle Thomas',
    //     city: 'Seattle',
    //     orderTotal: 99.99,
    //     customerSince: new Date(2002, 10, 31),
    //   },
    //   {
    //     id: 4,
    //     name: 'Jim Thomas',
    //     city: 'New York',
    //     orderTotal: 599.99,
    //     customerSince: new Date(2002, 10, 31),
    //   },
    // ];
  }

  calculateOrders() {
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((cust: ICustomer) => {
      this.customersOrderTotal += cust.orderTotal || 0;
    });
  }

  sortHandle(prop: string) {
    //this handle for sort the table later
  }
}
