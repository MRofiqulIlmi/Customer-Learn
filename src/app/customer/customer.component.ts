import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../shared/interfaces';

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

  constructor() {
    // PADA INITIATE VALUE DISINI MERUPAKAN DATA YANG AKAN DI RENDER TEPAT SAAT PAGE DI RENDER
    // this.title = '';
    this.people = [];
  }

  ngOnInit(): void {
    // PADA TEMPAT INI AKAN TERKAIT SAMA LIFECYCLE, JADI BISA MENUNGGU UNTUK SELESAI HTTP REQ NANTINYA
    this.title = 'Admin List';
    this.people = [
      {
        id: 1,
        name: 'john Doe',
        city: 'Phoenix',
        orderTotal: 9.99,
        customerSince: new Date(2014, 7, 10),
      },
      {
        id: 2,
        name: 'Jane Doe',
        city: 'Chandler',
        orderTotal: 19.99,
        customerSince: new Date(2017, 2, 22),
      },
      {
        id: 3,
        name: 'Michelle Thomas',
        city: 'Seattle',
        orderTotal: 99.99,
        customerSince: new Date(2002, 10, 31),
      },
      {
        id: 4,
        name: 'Jim Thomas',
        city: 'New York',
        orderTotal: 599.99,
        customerSince: new Date(2002, 10, 31),
      },
    ];
  }
}
