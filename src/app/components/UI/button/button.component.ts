import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() type; 
  @Input() look; 
  @Input() disabled;
  @Input() text;
  @Input() use; 
  @Input() queryParams; 

  @Input() to; 

  @Output() buttonClick = new EventEmitter();

  onClick(){
    this.buttonClick.emit(); 
  }


}
