import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalProfileComponent } from './personal-profile/personal-profile.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: PersonalProfileComponent}
]

@NgModule({
  declarations: [PersonalProfileComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PersonalProfileModule { }
