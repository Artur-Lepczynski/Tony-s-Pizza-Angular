import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
  enteredAddress = localStorage.deliveryAddress || localStorage.address || '';
  enteredAddressTouched = false;
  ordered = false;

  constructor(private cartService: CartService,  private router: Router) {}

  addressBlur() {
    this.enteredAddressTouched = true;
  }

  enteredAddressValid() {
    return this.enteredAddress.length > 6;
  }
  enteredAddressInputValid() {
    return this.enteredAddressValid() || !this.enteredAddressTouched;
  }

  ngOnInit(): void {
    this.ordered = this.cartService.orderData.ordered;
  }

  handleOrder(){
    if(this.ordered){
      this.cartService.reset();
    }
    localStorage.deliveryAddress = this.enteredAddress;
    this.router.navigate(['/menu']);
    console.log(localStorage.deliveryAddress)
  }

}
