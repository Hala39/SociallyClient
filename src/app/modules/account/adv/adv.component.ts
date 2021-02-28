import { Component, OnInit } from '@angular/core';
import { faImages, faShareSquare, faUsers, faUserSecret } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-adv',
  templateUrl: './adv.component.html',
  styleUrls: ['./adv.component.scss']
})
export class AdvComponent implements OnInit {
  faImages = faImages;
  faUsers = faUsers;
  faShareSquare = faShareSquare;

  items = [
    {icon: faImages, paragraph: 'Discover  2,500+ images per day'},
    {icon: faUsers, paragraph: 'Join on 450,000+ active member'},
    {icon: faShareSquare, paragraph: 'Share your own photos and posts'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
