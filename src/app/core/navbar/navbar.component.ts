import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loginLogOutText='Login';
  ngOnInit(){
    console.log('Navbarcomponent ngOnInit');
    
  }

  constructor(private authService:AuthService,private router:Router){
    console.log('Navbarcomponent constructor');
    
  }
  ngOnChanges(){
    console.log('Navbarcomponent ngonchanges');
    
  }
  loginOrOut(){
    const isAuthenticated = this.authService.isAuthenticated;
    if(isAuthenticated){
      this.authService.logout().subscribe((status:boolean)=>{
      this.loginLogoutText();
      this.router.navigate(['/customers'])
    })
    }else{
      this.router.navigate(['/login']);
    }
  }
  loginLogoutText(){
  this.loginLogOutText=this.authService.isAuthenticated?'Logout':'Login';
  }
}
