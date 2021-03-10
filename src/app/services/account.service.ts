import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';
import { IUser } from 'src/app/models/User';
import { ReplaySubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = environment.apiUrl + 'account/';
  private currentUserSource = new ReplaySubject<IUser>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private apiCaller: HttpClient, private jwtHelper: JwtHelperService) { }

  checkPassword(email: string, password: string) {
    let params = new HttpParams()
    .set('email', email)
    .set('password', password);
    return this.apiCaller.get<boolean>(this.baseUrl + 'checkPass?' + params);
  }

  checkEmailExists(email: string) {
    return this.apiCaller.get<boolean>(this.baseUrl + 'checkEmail?email=' + email);
  }

  checkUsernameExists(username: string) {
    return this.apiCaller.get<boolean>(this.baseUrl + 'checkUsername?username=' + username);
  }

  Login(user: IUser) {
    return this.apiCaller.post<IUser>(this.baseUrl + 'login', user).pipe(
      map((res: IUser) => {
          if(res) {
            localStorage.setItem('access_token', res.token);
            localStorage.setItem('expirationDate', JSON.stringify(this.jwtHelper.getTokenExpirationDate(res.token)));
            localStorage.setItem('user', JSON.stringify(res));
            this.currentUserSource.next(res);
            console.log(res);
          } else {
            console.log("what the fuck");
          }
    }));
  }

  Register(user: IUser) {
    return this.apiCaller.post<IUser>(this.baseUrl + 'register', user).pipe(
      map(res => {
          localStorage.setItem('access_token', res.token);
          localStorage.setItem('expirationDate', JSON.stringify(this.jwtHelper.getTokenExpirationDate(res.token)));
          localStorage.setItem('user', JSON.stringify(res));
          this.currentUserSource.next(res);
          console.log(res);
    }));
  }

  public get loggedIn(): boolean{
    return localStorage.getItem('access_token') !==  null;
  }

  logout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("expirationDate");
  }
  
  getExpiration() {
    return localStorage.getItem("expirationDate");
  } 
}
