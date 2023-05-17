import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  ordered = false;
  isAuth = false;
  userSub; 
  orderSub; 

  constructor(
    private cartService: CartService,
    private authService: AuthService, 
    private router: Router
  ) {}

  name(){
    return localStorage.name || "User"; 
  }

  handleTrackOrder(){
    this.router.navigate(['/order']);
  }

  ngOnInit(): void {
    //need to subscribe?
    this.ordered = this.cartService.orderData.ordered;

    this.orderSub = this.cartService.ordered.subscribe((servOrdered)=>{
      // this.ordered = this.cartService.orderData.ordered;
      this.ordered = servOrdered;
    })

    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuth = !!user;
    });
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
    this.orderSub.unsubscribe();
  }
}
