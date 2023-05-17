import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-menu-cart-modal-item',
  templateUrl: './menu-cart-modal-item.component.html',
  styleUrls: ['./menu-cart-modal-item.component.css']
})
export class MenuCartModalItemComponent {
  @Input() item; 

  constructor(private cartService: CartService) { }

  handleAdd(){
    this.cartService.addItem({id: this.item.id, quantity: 1});
  }

  handleRemove(){
    this.cartService.removeItem({id: this.item.id, quantity: 1});
  }


}
