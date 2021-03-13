import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { TopComponent } from './top/top.component';
import { ContactComponent } from './contact/contact.component';
import { ConversationComponent } from './conversation/conversation.component';

const routes: Routes = [
  {path: '', component: ChatComponent}
]

@NgModule({
  declarations: [ChatComponent, TopComponent, ContactComponent, ConversationComponent],
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule,
    RouterModule.forChild(routes)
  ]
})
export class ChatModule { }
