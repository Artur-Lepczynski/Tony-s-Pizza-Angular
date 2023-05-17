import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  deliveryTime = null;
  deliveryTimeString = null;
  delivered = false;

  constructor(private cartService: CartService, private router: Router) {}

  handleReset(){
    this.cartService.reset();
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    if (localStorage.deliveryTime) {
      this.deliveryTime = localStorage.deliveryTime;
    } else {
      this.deliveryTime = this.cartService.orderData.deliveryTime;
    }

    this.deliveryTimeString = new Date(+this.deliveryTime).toLocaleString(
      'en-US',
      {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      }
    );

    this.delivered = this.deliveryTime < new Date().getTime();
  }
}
