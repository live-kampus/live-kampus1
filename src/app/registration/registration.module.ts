import { NgModule } from '@angular/core';
import { RegistrationComponent } from './registration.component';
import { RouterModule } from '@angular/router';
import { registrationRoute } from './registration.route';
import { RegistrationService } from './registration.service';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        RegistrationComponent
    ],
    imports:[
        RouterModule.forChild(registrationRoute),
        FormsModule
    ],
    exports: [
        RegistrationComponent,
        RouterModule
    ],
    providers:[
        RegistrationService
    ]
})
export class RegistrationModule{

}