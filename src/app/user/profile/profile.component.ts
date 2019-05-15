import { Component } from '@angular/core';
import { ProfileService } from './profile.service';
import { ActivatedRoute } from '@angular/router';
import { UserProfile } from './profile';

@Component({
    templateUrl:'./profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent{
    profile:UserProfile;

    constructor(private profileService:ProfileService,private route:ActivatedRoute,
    ){}

    ngOnInit(){
        this.profileService.findProfileByEmail().subscribe((data)=>{
            console.log(data);
            this.profile=data;
        },err=>{
            console.log(err);
        })
}}