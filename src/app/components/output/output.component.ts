import { Component } from '@angular/core';
import { OutputChildComponent } from './OutputChildComponent';

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [OutputChildComponent],
  templateUrl: './output.component.html',
  styleUrl: './output.component.css',
})
export class OutputComponent {
  receivedMessage: string = '';

  receiveData(message: string) {
    this.receivedMessage = message;
  }
}
