import { AccountService } from 'src/app/services/account.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanLoadGuard implements CanLoad {
  constructor(private accountService: AccountService, private router: Router) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.accountService.loggedIn) {
        return true;
      }
        this.router.navigateByUrl("/account");
        return false;
  }
}
