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
import { CartService } from './cart.service';

@Injectable({ providedIn: 'root' })
export class OrderGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private cartService: CartService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    const path = route.url[0].path;
    const ordered = this.cartService.orderData.ordered;
    
    if (path === 'menu' || path === 'checkout') {
      if (!ordered) {
        return true;
      } else {
        return this.router.createUrlTree(['/order']);
      }
    }else if(path === 'order'){
      if (ordered) {
        return true;
      } else {
        return this.router.createUrlTree(['/menu']);
      }
    }
    
  }
}
