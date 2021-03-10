import { IAuth, IUser } from 'src/app/models/User';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl + 'user/';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<IUser[]>(this.baseUrl);
  }

  getUser(userName: string) {
    return this.http.get<IUser>(this.baseUrl + userName);
  }

  updateUserInfo(user: IUser) {
    return this.http.put<IAuth>(this.baseUrl, user).subscribe((res: IAuth) => {
      localStorage.setItem('user', JSON.stringify(res.value));
    });
  }

}

