import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from './city';

@Injectable()
export class CityService  {

    baseUrl="http://localhost:8086/city"

    constructor(private http:HttpClient){}

    
    findCity():Observable<City[]>{

        return this.http.get<City[]>(this.baseUrl);

    }

    findCityById(): Observable<City[]> {
        return this.http.get<City[]>(this.baseUrl);
    }

}