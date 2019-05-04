import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  ngOnInit(){
    console.log('OrdersComponent ngOnInit');
    
  }

  constructor(){
    console.log('OrdersComponent constructor');
    
  }
  ngOnChanges(){
    console.log('OrdersComponent ngonchanges');
    
  }
}
