import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-menu-cart-modal',
  templateUrl: './menu-cart-modal.component.html',
  styleUrls: ['./menu-cart-modal.component.css']
})
export class MenuCartModalComponent implements OnInit{

  @Input() menu; 
  @Output() close = new EventEmitter(); 
  orderedItems = []; 
  priceTotal = this.cartService.orderData.priceTotal;

  constructor(private cartService: CartService, private router: Router) { }

  handleModalClose(){
    this.close.emit();
  }

  handleOrder(){
    this.handleModalClose();
    this.router.navigate(["/checkout"]);
  }

  ngOnInit(): void {
    this.updateOrder();
    this.cartService.added.subscribe(()=>{
      this.updateOrder();
    });
  }

  updateOrder(){
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
