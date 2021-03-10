import { faSearch, faThumbtack } from '@fortawesome/free-solid-svg-icons';
import { faBell as farBell , faCommentDots as farCommentDots} from '@fortawesome/free-regular-svg-icons'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  faSearch = faSearch;
  farBell = farBell;
  farCommentDots = farCommentDots;
  faThumbTack = faThumbtack;
  constructor() { }

  ngOnInit(): void {
  }

}
