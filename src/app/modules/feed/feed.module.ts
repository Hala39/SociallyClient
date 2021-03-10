import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule
  ]
})
export class FeedModule { }
