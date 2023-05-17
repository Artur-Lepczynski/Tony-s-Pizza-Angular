import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    const path = route.url[0].path;

    if (path === 'account') {
      return this.authService.user.pipe(
        take(1),
        map((user) => {
          const auth = !!user;
          if (auth) {
            return true;
          } else {
            return this.router.createUrlTree(['/auth'], {
              queryParams: { mode: 'login' },
            });
          }
        })
      );
    } else if (path === 'auth') {
      return this.authService.user.pipe(
        take(1),
        map((user) => {
          const auth = !!user;
          if (!auth) {
            return true;
          } else {
            return this.router.createUrlTree(['/account']);
          }
        })
      );
    }
  }
}
