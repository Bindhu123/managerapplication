import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {CustomersComponent} from "./customers.component";
import {SharedModule} from "../shared/shared.module"
const routes:Routes=[
    {path:'',component:CustomersComponent}
]
@NgModule({
    imports:[RouterModule.forChild(routes),SharedModule],
    exports:[RouterModule]
})
export class CustomersRoutingModule{

}