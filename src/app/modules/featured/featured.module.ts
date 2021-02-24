import { SharedModule } from './../shared/shared.module';
import { FeedModule } from './../feed/feed.module';
import { AccountModule } from './../account/account.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AccountModule,
    FeedModule,
    SharedModule
  ],
  exports: [
    AccountModule,
    FeedModule,
    SharedModule
  ]
})
export class FeaturedModule { }
