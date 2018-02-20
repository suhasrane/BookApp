import { AuthService } from './services/auth.service';
import { CanActivate } from '@angular/router/src/interfaces';
import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(route, state: RouterStateSnapshot) {
    if (this.auth.isAdmin)
    // tslint:disable-next-line:one-line
    {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
