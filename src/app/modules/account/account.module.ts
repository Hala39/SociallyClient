import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdvComponent } from './adv/adv.component';
import { LinksComponent } from './links/links.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [AccountComponent, LoginComponent, AdvComponent, LinksComponent, RegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class AccountModule { }
