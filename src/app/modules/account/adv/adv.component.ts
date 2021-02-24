import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adv',
  templateUrl: './adv.component.html',
  styleUrls: ['./adv.component.scss']
})
export class AdvComponent implements OnInit {
  items = [
    {icon: 'images', paragraph: 'Discover  2,500+ images per day'},
    {icon: 'people', paragraph: 'Join on 450,000+ active member'},
    {icon: 'share-fill', paragraph: 'Share your own photos and posts'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
