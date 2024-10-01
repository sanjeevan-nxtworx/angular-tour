// child.component.ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  template: ` <button (click)="sendData()">Send Data to Parent</button> `,
  styleUrls: [],
})
export class OutputChildComponent {
  @Output() dataSent = new EventEmitter<string>();

  sendData() {
    this.dataSent.emit('Hello from the child component!');
  }
}
