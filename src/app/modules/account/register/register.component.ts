import { Router } from '@angular/router';
import { faCheck, faLock, faUser, faUserCheck, faUserPlus, faUnlock } from '@fortawesome/free-solid-svg-icons';
import { AccountService } from '../../../services/account.service';
import { Component, OnInit } from '@angular/core';
import { AsyncValidatorFn, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { timer, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { IUser } from 'src/app/models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  faLock = faLock;
  faUnlock = faUnlock;
  faUser = faUser;
  faCheck = faCheck;
  faUserCheck = faUserCheck;
  faUserPlus = faUserPlus;
  
  form: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder, private auth: AccountService, private router: Router) { }

  ngOnInit(): void {
    this.Validate();
  }

  ngOnDestroy() {
    this.form.reset();
  }

  Up() {
    window.scrollTo(0, 0);
  }

  ShowPassword() {
    this.hide = !this.hide;
  }

  username = new FormControl('',
  {
    validators: [
      Validators.required
    ],
    asyncValidators: [
      this.validateUsername()
    ],
    updateOn: 'blur'
  });

  email = new FormControl('',
  { 
    validators: [
      Validators.required,
      Validators.email
    ], 
    asyncValidators: [
      this.validateEmail()
    ], 
    updateOn: 'blur'
  });

  password = new FormControl('', {
    validators: [
      Validators.required,
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z]).{6,}$')
    ],
     updateOn: 'blur'
  });

  user: IUser;

  Validate() {
    this.form = this.fb.group({
      username: this.username,
      email: this.email,
      password: this.password
    }
  )};


  Register() {
    this.user = {
      email: this.email.value,
      password: this.password.value,
      userName: this.username.value
    };
    if(this.form.valid) {
      this.auth.Register(this.user);
      this.router.navigateByUrl('/personal-profile');
    } else {
      this.Up();
    }
  }

  validateEmail(): AsyncValidatorFn {
    return control => {
      return timer(500).pipe(
        switchMap(() => {
          if (!control.value) {
            return of(null);
          }
          return this.auth.checkEmailExists(control.value).pipe(
            map(res => {
              return res ? { emailTaken: true } : null;
            })
          )}
      ));
    };
  }

  validateUsername(): AsyncValidatorFn {
    return control => {
      return timer(500).pipe(
        switchMap(() => {
          if (!control.value) {
            return of(null);
          }
          return this.auth.checkUsernameExists(control.value).pipe(
            map(res => {
              return res ? { usernameTaken: true } : null;
            })
          )}
      ));
    };
  }

}
