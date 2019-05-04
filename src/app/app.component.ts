import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'managerapplication';
  ngOnInit(){
    console.log('AppComponent ngOnInit');
    
  }

  constructor(){
    console.log('App Component constructor');
    
  }
  ngOnChanges(){
    console.log('Appcomponent ngonchanges');
    
  }
}
