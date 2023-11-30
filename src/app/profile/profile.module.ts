import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { SharedModule } from "../shared/shared.module";
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';


@NgModule({
    declarations: [
        ProfileComponent,
        ProfileInfoComponent
    ],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        SharedModule
    ]
})
export class ProfileModule { }
