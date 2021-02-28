import { faBriefcase, faFemale, faGraduationCap, faHouseUser, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {
  faFemale = faFemale;
  faHouseUser = faHouseUser;
  faGraduationCap = faGraduationCap;
  faBriefCase = faBriefcase;
  faQuoteRight = faQuoteRight;
  faQuoteLeft = faQuoteLeft;

  constructor() { }

  ngOnInit(): void {
  }

}
