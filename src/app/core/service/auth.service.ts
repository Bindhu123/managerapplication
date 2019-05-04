import {  Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export  class AuthService{
    redirectUrl:string;
    isAuthenticated=false;
    authUrl='http://localhost:3000/api/auth';
    login(userLogin):Observable<boolean>{
        return this.http.post<boolean>(this.authUrl+'/login',userLogin);
    }

    logout(){
        return this.http.post<boolean>(this.authUrl+'/logout',null);
    }
    constructor(private http:HttpClient){

    }
}