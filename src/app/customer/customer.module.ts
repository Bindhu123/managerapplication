import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { CustomerDetailsComponent } from './customer-details.component';
import { CustomerEditComponent } from './customer-edit.component';
import { RouterModule } from '@angular/router';
import { CustomerRoutingModule } from './customerrouting.module';
import { CustomerOrdersComponent } from './customer-orders.component';
import {SharedModule} from "../shared/shared.module"


@NgModule({
  declarations: [CustomerComponent, CustomerDetailsComponent, CustomerEditComponent,CustomerOrdersComponent],
  imports: [
    CommonModule,
    RouterModule,
    CustomerRoutingModule,SharedModule
  ]
})
export class CustomerModule { }
