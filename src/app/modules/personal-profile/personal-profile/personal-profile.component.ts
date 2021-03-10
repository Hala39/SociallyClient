import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { faHouseUser, faGraduationCap, faBriefcase, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { IUser } from 'src/app/models/User';
import { pipe } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-personal-profile',
  templateUrl: './personal-profile.component.html',
  styleUrls: ['./personal-profile.component.scss']
})
export class PersonalProfileComponent implements OnInit {
  user: IUser;

  faHouseUser = faHouseUser;
  faGraduationCap = faGraduationCap;
  faBriefCase = faBriefcase;
  faQuoteLeft = faQuoteLeft;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.loadUser();
  }
  
  loadUser() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

}
