import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { SharedModule } from '../shared/shared.module';

const routes : Routes = [
  {path: '', component: FeedComponent}
]
@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class FeedModule { }
