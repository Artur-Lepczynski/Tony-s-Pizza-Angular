import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() header; 
  @Input() message; 
  @Input() cancelText;
  @Input() confirmText;
  
  @Output() onConfirm = new EventEmitter();
  @Output() onCancel = new EventEmitter();

  confirm(){
    this.onConfirm.emit(); 
  }

  cancel(){
    this.onCancel.emit(); 
  }

}
