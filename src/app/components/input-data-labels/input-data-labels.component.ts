import { Component } from '@angular/core';
import { InputLabelComponent } from './input-label/input-label.component';

@Component({
  selector: 'app-input-data-labels',
  standalone: true,
  imports: [InputLabelComponent],
  templateUrl: './input-data-labels.component.html',
  styleUrl: './input-data-labels.component.css',
})
export class InputDataLabelsComponent {
  personList = [
    {
      name: 'John Doe',
      address: '101, Smart Street, Injland',
      telNo: '+10 99384940',
    },
    {
      name: 'Jane Smith',
      address: '1, Harry Storter Street, Hermany',
      telNo: '+12 94398484',
    },
    {
      name: 'Joe Fine',
      address: '21, Jerry Lane, Hile',
      telNo: '+1 48338984',
    },
  ];
}
