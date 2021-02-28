import { RegisterComponent } from './modules/account/register/register.component';
import { ChatComponent } from './modules/chat/chat/chat.component';
import { ProfileComponent } from './modules/profile/profile/profile.component';
import { PersonalProfileComponent } from './modules/personal-profile/personal-profile/personal-profile.component';
import { FeedComponent } from './modules/feed/feed.component';
import { AccountComponent } from './modules/account/account/account.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AccountComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'feed', component: FeedComponent},
  { path: 'personal-profile', component: PersonalProfileComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'chat', component: ChatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
