import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IUser } from 'src/app/models/User';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {
  
  @Input() myProfile: boolean;
  @Input() infos: [];
  @Output() reload = new EventEmitter<boolean>();

  text: string;
  title: string;

  editMode = false;
  form: FormGroup;
  value = new FormControl('', [Validators.required, Validators.maxLength(35), Validators.minLength(2)]);

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { 
  }

  build() {
    this.form = this.fb.group({
      value: this.value
    })
  }

  ngOnInit(): void {
    this.build();
  }

  edit(text: string, title: string) {
    this.title = title;
    this.text = text;
  }

  saveChanges(title: string) {
    const value = this.value.value;
    var user: IUser;
      if(title === "Address")
      {
        user = {
          address: value
        }
      } 
      else if(title === "Education")
      {
        user = {
          education: value
        }
      } 
      else if(title === "Work")
      {
        user = {
          work: value
        }
      } 
      else if(title === "Bio")
      {
        user = {
          bio: value
        }
      };
    this.userService.updateUserInfo(user);
    this.router.navigateByUrl('/success');
  };
  
}
