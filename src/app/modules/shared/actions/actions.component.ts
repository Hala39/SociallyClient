import { Component, OnInit } from '@angular/core';
import { faComment as farComment, faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

  farHeart = farHeart;
  faComment = farComment;
  constructor() { }

  ngOnInit(): void {
  }

}
