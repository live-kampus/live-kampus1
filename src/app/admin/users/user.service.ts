    
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdminUser } from './admin-user';


@Injectable()
export class UserService{

    baseUrl="/assets/jsondata/userjson.json"

    constructor(private http:HttpClient){}

    
    findUser():Observable<AdminUser[]>{
        return this.http.get<AdminUser[]>(this.baseUrl);
    }

    findUserById(): Observable<AdminUser[]> {
        return this.http.get<AdminUser[]>(this.baseUrl);
    }
}