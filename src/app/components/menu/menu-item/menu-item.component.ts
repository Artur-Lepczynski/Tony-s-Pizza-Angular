import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
})
export class MenuItemComponent implements OnInit{
  quantity = 0;

  @Input() id;
  @Input() name;
  @Input() description;
  @Input() price;
  @Input() url;

  constructor(private cartService: CartService) {}

  ngOnInit(){
    // console.log(this.url);
  }

  handleQuantityChange(event) {
    const value = event.target.value;
    if (value < 0 || value > 5 || value === '') {
      this.quantity = 0;
      return;
    }
    this.quantity = Number.parseInt(event.target.value);
  }

  handleMinusClick() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }

  handleAddClick() {
    if (this.quantity < 5) {
      this.quantity++;
    }
  }

  handleAddToCart() {
    if(this.quantity === 0) return; 
    this.cartService.addItem({id: this.id, quantity: this.quantity})
    this.quantity = 0;
  }
}
