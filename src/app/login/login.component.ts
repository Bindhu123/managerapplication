import { Component, OnInit } from '@angular/core';
import  { FormBuilder, Validators, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from '../core/service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  ngOnInit(){
    this.buildForm();
    console.log('LoginComponent ngOnInit');
    
  }

  constructor(private formBuilder:FormBuilder,private router:Router,private authService:AuthService){
    console.log('LoginComponent constructor');
    
  }
  ngOnChanges(){
    console.log('LoginComponent ngonchanges');
    
  }
buildForm(){
  this.loginForm=this.formBuilder.group({
    email:['',[Validators.required]],
    password:['',[Validators.required]]
  })
}
submit({value,valid}:{value,valid:boolean}){
  this.authService.login(value).subscribe((function(status:boolean){
    if(status){
      console.log(this.authService.redirectUrl);
      
      if(this.authService.redirectUrl){
        const redirectUrl=this.authService.redirectUrl;
        this.authService.redirectUrl='';
        this.router.navigate([redirectUrl]);
      }else{
        this.router.navigate(['/customers']);
      }
    }
  }))
}
}
