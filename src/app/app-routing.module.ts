import { SuccessComponent } from './modules/misc/success/success.component';
import { ServerErrorComponent } from './modules/misc/server-error/server-error.component';
import { NotFoundComponent } from './modules/misc/not-found/not-found.component';
import { AuthGuard } from './modules/account/auth.guard';
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
  // {
  //   path: '',
  //   runGuardsAndResolvers: 'always',
  //   canActivate: [AuthGuard],
  //   children: [
      { path: 'register', component: RegisterComponent},
      { path: 'feed', component: FeedComponent},
      { path: 'personal-profile', component: PersonalProfileComponent},
      { path: 'profile', component: ProfileComponent},
      { path: 'chat', component: ChatComponent},
  //   ]
  // },
  { path: 'not-found', component: NotFoundComponent},
  { path: 'server-error', component: ServerErrorComponent},
  { path: 'success', component: SuccessComponent},
  { path: '**', component: AccountComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
