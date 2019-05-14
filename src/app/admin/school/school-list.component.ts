import { Component, OnInit } from '@angular/core';
import { Schools } from './school';
import { SchoolService } from './school.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    // selector:"school-list",
    templateUrl: './school-list.component.html',
    styleUrls: ['./school-list.component.css']
})
export class SchoolListComponent implements OnInit {

    school: Schools;
    schools: Schools[];
    constructor(private schoolService: SchoolService,
        private route: Router) { }
        ngOnInit(): void {
                this.school= new Schools();
                this.schoolService.findSchool().subscribe((data) => {
                    this.schools = data;
                    console.log(data);

                });
            }

        viewbtn(schoolId: number) {
            this.schoolService.findSchoolById(schoolId).subscribe((data)=>{
                this.school = data;
            });
        }
    }