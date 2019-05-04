import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { OrdersRoutingModule } from './ordersrouting.module';


@NgModule({
  declarations: [OrdersComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ],
  exports:[OrdersComponent]
})
export class OrdersModule { }
