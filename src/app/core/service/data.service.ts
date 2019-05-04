import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { ICustomer } from "../../shared/interface";

@Injectable()

export class DataService {
    constructor(private http:HttpClient){
        
    }
    getCustomers(url):Observable<ICustomer[]>{
        return this.http.get<ICustomer[]>(url);
    }

    getCustomerById(id):Observable<ICustomer>{
        const url= 'http://localhost:3000/api/customers/';
        return this.http.get<ICustomer>(url+id);
    }
}