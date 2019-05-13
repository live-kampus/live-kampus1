import { Component, OnInit } from '@angular/core';
import { Schools } from './school';
import { SchoolService } from './school.service';
import { ActivatedRoute } from '@angular/router';


@Component({
    // selector:"school-list",
    templateUrl: './school-list.component.html',
    styleUrls: ['./school-list.component.css']
})
export class SchoolListComponent implements OnInit {

    school: Schools;
    schools: Schools[];
    constructor(private schoolService: SchoolService,
                private route: ActivatedRoute) { }
        ngOnInit(): void {
            this.route.paramMap.subscribe((map) => {
                const schoolId = Number(map.get('schoolId'));
                console.log(schoolId);
                this.schoolService.findSchoolById(schoolId).subscribe((data) => {
                    this.schools = data;

                });
            });
        }

        viewbtn(schoolId: number) {
            this.schoolService.findSchoolById(schoolId).subscribe((data)=>{
                this.schools = data;
            });
        }
    }