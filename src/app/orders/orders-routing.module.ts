import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders.component';
import { NgModule } from '@angular/core';

//the paramater of id will be route to id of specific customer,
//will be so the order of {id}'s customer
const route: Routes = [{ path: 'orders/:id', component: OrdersComponent }];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}
