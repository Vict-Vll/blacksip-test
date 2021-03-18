import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  @Output() closeModal = new EventEmitter<string>();
  constructor() { }

  close() {
    this.closeModal.emit();
  }
}