import { Injectable } from '@angular/core';
import { UrlTree, Router, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private auth: AuthService, private router: Router) {}
  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.auth.loggedIn) {
      return true;
    }
      this.router.navigate(['/account/login']);
      return false;
  }
}
