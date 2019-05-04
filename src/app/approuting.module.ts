import {RouterModule,Routes} from '@angular/router'
import { NgModule } from "@angular/core";
  
const routes:Routes=[
    {path: '', redirectTo: 'customers', pathMatch: 'full'},
{path:"customers",loadChildren:'./customers/customers.module#CustomersModule'},
{path:"customers/:id",loadChildren:'./customer/customer.module#CustomerModule'},
{path:"orders",loadChildren:"./orders/orders.module#OrdersModule"},

]

@NgModule({
imports:[RouterModule.forRoot(routes)],
exports:[RouterModule]
})

export class AppRoutingModule{

}