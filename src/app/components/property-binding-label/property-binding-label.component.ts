import { Component } from '@angular/core';
import {} from '../input-data-labels/input-label/input-label.component';
import { PropertyLabelComponent } from './property-label/property-label.component';

@Component({
  selector: 'app-property-binding-label',
  standalone: true,
  imports: [PropertyLabelComponent],
  templateUrl: './property-binding-label.component.html',
  styleUrl: './property-binding-label.component.css',
})
export class PropertyBindingLabelComponent {
  personList = [
    {
      name: 'John Doe',
      address: '101, Smart Street, Injland',
      telNo: '+10 99384940',
      src: '/images/user1.png',
    },
    {
      name: 'Jane Smith',
      address: '1, Harry Storter Street, Hermany',
      telNo: '+12 94398484',
      src: '/images/user4.png',
    },
    {
      name: 'Joe Fine',
      address: '21, Jerry Lane, Hile',
      telNo: '+1 48338984',
      src: '/images/user2.jpeg',
    },
  ];
}
