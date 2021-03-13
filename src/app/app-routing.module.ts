import { SuccessComponent } from './modules/misc/success/success.component';
import { ServerErrorComponent } from './modules/misc/server-error/server-error.component';
import { NotFoundComponent } from './modules/misc/not-found/not-found.component';
import { AccountComponent } from './modules/account/account/account.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanLoadGuard } from './_guards/can-load.guard';

const routes: Routes = [
  { path: 'account', component: AccountComponent},
  { path: '', loadChildren: () => import('../app/modules/feed/feed.module').then(m => m.FeedModule), 
    canLoad: [CanLoadGuard]},
  { path: 'personal-profile', loadChildren: () => import('../app/modules/personal-profile/personal-profile.module')
    .then(m => m.PersonalProfileModule), 
    canLoad: [CanLoadGuard]},
  { path: 'profile:id', loadChildren: () => import('../app/modules/profile/profile.module').then(m => m.ProfileModule), 
    canLoad: [CanLoadGuard]},
    { path: 'chat', loadChildren: () => import('../app/modules/chat/chat.module').then(m => m.ChatModule), 
  canLoad: [CanLoadGuard]},
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
