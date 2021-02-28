import { ChatModule } from './../chat/chat.module';
import { ProfileModule } from './../profile/profile.module';
import { PersonalProfileModule } from './../personal-profile/personal-profile.module';
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
    SharedModule,
    PersonalProfileModule,
    ProfileModule,
    ChatModule
  ],
  exports: [
    AccountModule,
    FeedModule,
    SharedModule,
    PersonalProfileModule,
    ProfileModule,
    ChatModule
  ]
})
export class FeaturedModule { }
