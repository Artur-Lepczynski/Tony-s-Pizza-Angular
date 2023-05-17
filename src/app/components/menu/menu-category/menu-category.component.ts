import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-category',
  templateUrl: './menu-category.component.html',
  styleUrls: ['./menu-category.component.css']
})
export class MenuCategoryComponent {
  @Input() category;
  @Input() description;
  @Input() items;
}
