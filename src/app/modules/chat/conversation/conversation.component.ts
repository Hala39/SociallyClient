import { Component, OnInit } from '@angular/core';
import { faCircle, faPaperclip, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {
  faCircle = faCircle;
  faPaperclip = faPaperclip;
  faPaperPlane = faPaperPlane;
  
  constructor() { }

  ngOnInit(): void {
  }

}
