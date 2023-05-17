import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

import { menu } from 'src/app/services/products';

@Component({
  selector: 'app-menu-cart',
  templateUrl: './menu-cart.component.html',
  styleUrls: ['./menu-cart.component.css']
})
export class MenuCartComponent implements OnInit{
  menu = menu;
  modalShown = false; 
  animated = false;
  amount = this.cartService.orderData.numberOrdered;

  constructor(private cartService: CartService) { }

  handleCartClick(){
    this.modalShown = true;

  }

  handleModalClose(){
    this.modalShown = false;
  }

  ngOnInit(): void {
    this.cartService.added.subscribe(() => {
      this.amount = this.cartService.orderData.numberOrdered;
      if(this.amount > 0){
        this.animated = true;
        setTimeout(() => {
          this.animated = false;
        }, 500);
      }
    });

  }
}
