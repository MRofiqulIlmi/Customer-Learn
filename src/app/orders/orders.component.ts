import { Component } from '@angular/core';
import { ICustomer, IOrder } from '../shared/interfaces';
import { DataService } from '../core/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent {
  orders: IOrder[] = [];
  customer: ICustomer = {
    id: NaN,
    name: '',
    city: '',
    customerSince: '',
  };

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    //the 1 will be change by id come from the routing
    this.dataService.getCustomer(1).subscribe((customerVal: ICustomer) => {
      this.customer = customerVal;
    });
  }
}
