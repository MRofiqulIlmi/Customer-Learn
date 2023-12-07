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
    //activatedRoute is to look the root on the time they hit
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    //snapshot used for capture the id will be placed on route, but this condition can't be use if id change for random time or responsive
    //the paramMap will capture param on it
    let id: any = this.route.snapshot.paramMap.get('id');

    if (typeof id === 'string') {
      id = parseInt(id);
    }

    this.dataService.getOrders(id).subscribe((order: IOrder[]) => {
      this.orders = order;
    });

    this.dataService.getCustomer(id).subscribe((customerVal: ICustomer) => {
      this.customer = customerVal;
    });
  }
}
