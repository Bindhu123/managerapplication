import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../core/service/auth.service';

@Injectable()

export class CanActivateGuard implements CanActivate{
    constructor(private authService:AuthService,private router:Router){

    }
    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean{
if(this.authService.isAuthenticated){
    return true;
}
this.authService.redirectUrl=state.url;
this.router.navigate(['/login']);
return false;
    }
}