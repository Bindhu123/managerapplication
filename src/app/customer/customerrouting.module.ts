import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { CustomerComponent } from './customer.component';
import { CustomerDetailsComponent } from './customer-details.component';
import { CustomerEditComponent } from './customer-edit.component';
import { CustomerOrdersComponent } from './customer-orders.component';
import { CanActivateGuard } from './canactivate.guard';
import { AuthService } from '../core/service/auth.service';


const routes:Routes=[
    {path:'',component:CustomerComponent,
    children:[
    {path:'details',component:CustomerDetailsComponent},

    {path:'edit',component:CustomerEditComponent},
{path:'orders',component:CustomerOrdersComponent}]
    }

];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    providers:[CanActivateGuard]
})

export class CustomerRoutingModule{
    constructor(private authService:AuthService){

    }
}