import { EventEmitter, Injectable } from "@angular/core";

import { menu } from "./products";


@Injectable({ providedIn: 'root' })
export class CartService{
  //do componnets need to sub to ordered? 
  orderData = {
    ordered: false, 
    paymentMethod: '',
    priceTotal: 0,
    numberOrdered: 0,
    deliveryTime: null, 
  }
  items = [];
  added = new EventEmitter(); 
  ordered = new EventEmitter();

  order(orderData){
    this.orderData.ordered = true;
    this.orderData.paymentMethod = orderData.paymentMethod;
    this.orderData.deliveryTime = new Date().getTime() + 1000 * 60 * 60 * 1;
    this.ordered.emit(this.orderData.ordered);
  }

  reset(){
    this.orderData.ordered = false; 
    this.orderData.paymentMethod = '';
    this.orderData.priceTotal = 0;
    this.orderData.numberOrdered = 0;
    this.orderData.deliveryTime = null; 
    this.items = [];
    this.ordered.emit(this.orderData.ordered);
  }

  //payload: {id: 1, quantity: 2}
  addItem(payload){
    const orderedCategory = menu.find((category) => {
      return category.items.find((item) => {
        return item.id === payload.id;
      });
    });

    const orderedItem = orderedCategory.items.find((item) => {
      return item.id === payload.id;
    });

    const itemIndex = this.items.findIndex((item) => item.id === payload.id);

    if (itemIndex === -1) {
      this.items.push({id: payload.id, amount: payload.quantity});
      this.orderData.priceTotal = this.financial(this.orderData.priceTotal + orderedItem.price * payload.quantity);
      this.orderData.numberOrdered += payload.quantity;
    }else{
      this.items[itemIndex].amount += payload.quantity;
      this.orderData.priceTotal = this.financial(this.orderData.priceTotal + orderedItem.price * payload.quantity);
      this.orderData.numberOrdered += payload.quantity;
    }
    this.added.emit();
  }

  //payload: {id: 1, quantity: 1}
  removeItem(payload){
    const orderedCategory = menu.find((category) => {
      return category.items.find((item) => {
        return item.id === payload.id;
      });
    });

    const orderedItem = orderedCategory.items.find((item) => {
      return item.id === payload.id;
    });

    const itemIndex = this.items.findIndex((item) => item.id === payload.id);

    if(itemIndex === -1){
      return;
    }else{
      this.items[itemIndex].amount -= 1; //-1 always
      this.orderData.priceTotal = this.financial(this.orderData.priceTotal - orderedItem.price);
      this.orderData.numberOrdered -= 1;

      if(this.items[itemIndex].amount <= 0){
        this.items.splice(itemIndex, 1);
      }
    }
    this.added.emit();
  }

  financial(x){
    return Number.parseFloat(x.toFixed(2));
  }
}