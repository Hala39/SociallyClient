import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SuccessComponent } from './success/success.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerErrorComponent } from './server-error/server-error.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [ServerErrorComponent, NotFoundComponent, SuccessComponent],
  imports: [
    FontAwesomeModule,
    CommonModule
  ]
})
export class MiscModule { }
