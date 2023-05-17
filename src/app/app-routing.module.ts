import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { AuthenticationPageComponent } from './pages/authentication-page/authentication-page.component';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';

import { AuthGuard } from './services/authGuard.service';
import {OrderGuard} from "./services/orderGuard.service"

const routes: Routes = [
  {path: "", component: HomePageComponent}, 
  {path: "auth", component: AuthenticationPageComponent, canActivate: [AuthGuard]}, 
  {path: "account", component: AccountPageComponent, canActivate: [AuthGuard]},
  {path: "menu", component: MenuPageComponent, canActivate: [OrderGuard]}, 
  {path: "checkout", component: CheckoutPageComponent, canActivate: [OrderGuard]},
  {path: "order", component: OrderPageComponent, canActivate: [OrderGuard]},
  {path: "**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
