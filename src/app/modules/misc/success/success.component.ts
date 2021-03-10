import { Router } from '@angular/router';
import { faCheck, faUser } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {

  faCheck = faCheck;
  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {  this.router.navigateByUrl('/personal-profile'); }, 300);
  }

}
