import { AuthService } from './services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/interfaces';
import { Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  // RouterStateSnapshot helps us get the paramterUrl for returnUrl
  canActivate(route, state: RouterStateSnapshot) {
    if (this.auth.isLoggedIn())
    // tslint:disable-next-line:one-line
    {
      return true;
    }
    // navigate user to login page
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }

  constructor(private auth: AuthService, private router: Router) {


  }

}
