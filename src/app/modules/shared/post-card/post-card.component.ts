import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  faCheck = faCheck;

  @Input() userName: string;
  @Input() myProfile: boolean;
  @Input() posts: string[];
  constructor() { }

  ngOnInit(): void {
  }

}
