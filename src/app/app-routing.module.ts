import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Route format match from class statement in Routes
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/customers' },
  //this list is for all path that can be access
  { path: 'customers', pathMatch: 'full', redirectTo: '/customers' },
  { path: 'orders/:id', pathMatch: 'full', redirectTo: '/orders/:id' },
  //this value of ** is a wild card if the path doesn't match, the example if I find localhost:4000/foo, that not on list so will be redirect to /customers
  { path: '**', pathMatch: 'full', redirectTo: '/customers' },
];

@NgModule({
  //the routermodule.forRoot is for provide a configuration route and redirective
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
