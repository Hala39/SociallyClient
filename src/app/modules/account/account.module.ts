import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdvComponent } from './adv/adv.component';
import { LinksComponent } from './links/links.component';



@NgModule({
  declarations: [AccountComponent, LoginComponent, AdvComponent, LinksComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class AccountModule { }
