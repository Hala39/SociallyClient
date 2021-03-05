import { Router } from '@angular/router';
import { AuthService } from './../account.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, AsyncValidatorFn, FormGroup, FormBuilder, ControlContainer, ValidationErrors } from '@angular/forms';
import { timer, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { IUser } from 'src/app/models/User';
import { faLock, faUnlock, faUser, faCheck, faUserCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  faLock = faLock;
  faUnlock = faUnlock;
  faUser = faUser;
  faCheck = faCheck;
  faUserCheck = faUserCheck;
  
  form: FormGroup;
  hide = true;
  
  showPassword() {
    this.hide = !this.hide;
  }

  constructor(private auth: AuthService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.Up();
    this.Validate();
  }

  Up() {
    window.scrollTo(0, 0);
  }

  ShowPassword() {
    this.hide = !this.hide;
  }


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
      Validators.required
    ],
    asyncValidators: [
      this.validatePassword()
    ],
     updateOn: 'blur'
  });

  user: IUser;

  Validate() {
    this.form = this.fb.group({
      email: this.email,
      password: this.password
    }
  )};

  Login() {
    this.user = {
      email: this.email.value,
      password: this.password.value
    }
    if(this.form.valid) {
      this.auth.Login(this.user);
      this.router.navigateByUrl('/feed');
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
              return res ? null : { userExists: true };
            })
          );
        })
      );
    };
  }

  validatePassword(): AsyncValidatorFn {
    return control => {
      return timer(500).pipe(
        switchMap(() => {
          if(!control.value || !this.email.value) {
            return of(null);
          } else {
            return this.auth.checkPassword(this.email.value, control.value).pipe(
              map(res => {
                return res? null : { wrongPass: true };
              })
            )
          }
        })
      )
    }
  }

}
