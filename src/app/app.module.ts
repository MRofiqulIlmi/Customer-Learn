import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerModule } from './customer/customer.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    CustomerModule,
    SharedModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent, OrdersComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
