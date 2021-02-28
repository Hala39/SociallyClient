import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { TopComponent } from './top/top.component';
import { ContactComponent } from './contact/contact.component';
import { ConversationComponent } from './conversation/conversation.component';



@NgModule({
  declarations: [ChatComponent, TopComponent, ContactComponent, ConversationComponent],
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule
  ]
})
export class ChatModule { }
