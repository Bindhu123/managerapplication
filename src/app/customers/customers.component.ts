import { Component, OnInit } from '@angular/core';
import {DataService } from '../core/service/data.service';
import { ICustomer } from '../shared/interface';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customersData;
  cardViewStatus = true;
  listViewStatus = false;
  ngOnInit() {
    this.data.getCustomers('http://localhost:3000/api/customers').subscribe((response:ICustomer[])=>{
this.customersData=response;
console.log(this.customersData.firstname+"hi");

    },
    (err)=>{
      console.log(err+"hi");
      
    },()=>{
      console.log("completed communicating");
      
    })
    console.log('CustomersComponent ngOnInit');

  }

  constructor(public data:DataService) {
    console.log('CustomersComponent constructor');

  }
  ngOnChanges() {
    console.log('CustomersComponent ngonchanges');

  }
  loadPage(val) {
    if (val == "card") {
      this.cardViewStatus = true;
      this.listViewStatus = false;
    } else {
      this.cardViewStatus = false;
      this.listViewStatus = true;
    }
  }
}
