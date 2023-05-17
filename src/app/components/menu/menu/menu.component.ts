import { Component, ViewChild } from '@angular/core';

import {menu} from "../../../services/products"
import { MenuCategoryComponent } from '../menu-category/menu-category.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menu = menu;

  constructor() { }

  handleNavClick(category){
    const elem: HTMLElement = document.querySelector(`#${category}`)
    const parent = elem.offsetParent;
    // :) 
    if(parent instanceof HTMLElement) {
      const offset = parent.offsetTop;  
      window.scrollTo({behavior: "smooth", top: offset - 160})
    }
  }
}
