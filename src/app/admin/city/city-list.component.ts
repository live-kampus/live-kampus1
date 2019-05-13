import { Component, OnInit } from '@angular/core';
import { City } from './city';
import { CityService } from './city.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit{
  
  constructor(private cityService: CityService,
    private route: ActivatedRoute) {}

  cities:City[];
  ngOnInit():void{
    //we have to read the route parameters
    this.route.paramMap.subscribe((map)=>{
      let cityId=Number(map.get("cityId")); 
      console.log(cityId); 
      this.cityService.findCityById().subscribe((data)=>{
        this.cities=data;
        
      })  
    });
    
  }
}
