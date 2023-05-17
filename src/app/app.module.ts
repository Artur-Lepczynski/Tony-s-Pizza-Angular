import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { AuthenticationPageComponent } from './pages/authentication-page/authentication-page.component';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { HeaderComponent } from './components/header/header/header.component';
import { ButtonComponent } from './components/UI/button/button.component';
import { CardComponent } from './components/UI/card/card.component';
import { ModalComponent } from './components/UI/modal/modal.component';
import { PageComponent } from './components/UI/page/page.component';
import { AuthComponent } from './components/auth/auth/auth.component';
import { AccountComponent } from './components/account/account/account.component';
import { HomeComponent } from './components/home/home/home.component';
import { MenuComponent } from './components/menu/menu/menu.component';
import { MenuItemComponent } from './components/menu/menu-item/menu-item.component';
import { MenuCategoryComponent } from './components/menu/menu-category/menu-category.component';
import { MenuCartComponent } from './components/menu/menu-cart/menu-cart.component';
import { MenuCartModalComponent } from './components/menu/menu-cart-modal/menu-cart-modal.component';
import { MenuCartModalItemComponent } from './components/menu/menu-cart-modal-item/menu-cart-modal-item.component';
import { CheckoutComponent } from './components/checkout/checkout/checkout.component';
import { OrderComponent } from './components/order/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MenuPageComponent,
    AuthenticationPageComponent,
    AccountPageComponent,
    CheckoutPageComponent,
    OrderPageComponent,
    HeaderComponent,
    ButtonComponent,
    CardComponent,
    ModalComponent,
    PageComponent,
    AuthComponent,
    AccountComponent,
    HomeComponent,
    MenuComponent,
    MenuItemComponent,
    MenuCategoryComponent,
    MenuCartComponent,
    MenuCartModalComponent,
    MenuCartModalItemComponent,
    CheckoutComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
