import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';

// child routes need to insert two things : the name of the path, and component will be render
const routes: Routes = [{ path: 'customers', component: CustomerComponent }];

@NgModule({
  // and the import is a RouterModule for child
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
