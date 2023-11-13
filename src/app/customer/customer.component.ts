import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../shared/interfaces';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  // template: `<app-customer-list></app-customer-list>`,
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  title: string = '';
  // people: any[] = [];

  // cara ini baik apabila tidak menggunakan interface
  // people: Array<{
  //   id: number;
  //   name: string;
  //   city: string;
  //   orderTotal: number;
  //   customerSince: Date;
  // }> = [];

  people: ICustomer[];

  isVisible: boolean = true;

  changeVisible() {
    this.isVisible = !this.isVisible;
  }

  //because in dataservice use a injectable, so that can be use on all class uses.
  constructor(private dataService: DataService) {
    // PADA INITIATE VALUE DISINI MERUPAKAN DATA YANG AKAN DI RENDER TEPAT SAAT PAGE DI RENDER
    // this.title = '';
    this.people = [];
  }

  ngOnInit(): void {
    // PADA TEMPAT INI AKAN TERKAIT SAMA LIFECYCLE, JADI BISA MENUNGGU UNTUK SELESAI HTTP REQ NANTINYA
    this.title = 'Admin List';

    //Subscribe use for observable event, that do for async activity like a http request
    //so the data will be subscribe after the request has a response to the component
    this.dataService
      .getCustomers()
      .subscribe((customers: ICustomer[]) => (this.people = customers));

    // this.people = [
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
}
