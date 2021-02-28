import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tap } from 'rxjs/operators';
import { IAuthRes, IUser } from 'src/app/models/User';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.apiUrl + 'account/';

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
    return this.apiCaller.post<IAuthRes>(this.baseUrl + 'login', user).pipe(
      tap(res => {
          localStorage.setItem('access_token', res.value);
          localStorage.setItem('expirationDate', JSON.stringify(this.jwtHelper.getTokenExpirationDate(res.value)));
    }));
  }

  Register(user: IUser) {
    return this.apiCaller.post<IAuthRes>(this.baseUrl + 'register', user).pipe(
      tap(res => {
          localStorage.setItem('access_token', res.value);
          localStorage.setItem('expirationDate', JSON.stringify(this.jwtHelper.getTokenExpirationDate(res.value)));
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
