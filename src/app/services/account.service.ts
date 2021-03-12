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
            this.setCurrentUser(res);
          }
    }));
  }

  Register(user: IUser) {
    return this.apiCaller.post<IUser>(this.baseUrl + 'register', user).pipe(
      map(res => {
          this.setCurrentUser(res);
        }
      ));
  }

  setCurrentUser(user: IUser) {
    localStorage.setItem('access_token', user.token);
    localStorage.setItem('expirationDate', JSON.stringify(this.jwtHelper.getTokenExpirationDate(user.token)));
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUserSource.next(user);
  }
  
  public get loggedIn(): boolean{
    return localStorage.getItem('access_token') !==  null;
  }

  logout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("expirationDate");
    localStorage.removeItem("user");
  }
  
  getExpiration() {
    return localStorage.getItem("expirationDate");
  } 
}
