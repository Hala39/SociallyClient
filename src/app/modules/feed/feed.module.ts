import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { SharedModule } from '../shared/shared.module';
import { PostCardComponent } from './post-card/post-card.component';
import { ActionsComponent } from './actions/actions.component';



@NgModule({
  declarations: [FeedComponent, PostCardComponent, ActionsComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class FeedModule { }
