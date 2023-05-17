import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

import { menu } from 'src/app/services/products';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{
  paymentMethod = "cash";
  menu = menu;
  userData: any = {}; 
  orderedItems = []; 
  priceTotal = this.cartService.orderData.priceTotal;


  constructor(private cartService: CartService, private router: Router) { }

  handleOrder(){
    this.cartService.order({paymentMethod: this.paymentMethod});
    this.router.navigate(['/order']);
  }

  ngOnInit(): void {
    //user data
    this.userData.name = localStorage.name || "User"
    this.userData.lastName = localStorage.lastName || "Last Name"
    this.userData.email = localStorage.email || "Email Address"
    this.userData.address = localStorage.address || "Address"
    this.userData.deliveryAddress = localStorage.deliveryAddress || "Delivery Address"
    this.userData.password = localStorage.password;


    //order data
    const ordered = this.cartService.items.map((item)=>{
  
      const orderedCategory = this.menu.find((category) => {
        return category.items.find((categoryItem) => {
          return item.id === categoryItem.id;
        });
      });

      const orderedItem = orderedCategory.items.find((categoryItem) => {
        return item.id === categoryItem.id;
      });

      return {
        amount: item.amount,
        name: orderedItem.name,
        price: orderedItem.price,
        id: item.id,
        imgUrl: orderedItem.imgUrl,
      };
    })
    this.orderedItems = ordered;
    this.priceTotal = this.cartService.orderData.priceTotal;
  }

}
