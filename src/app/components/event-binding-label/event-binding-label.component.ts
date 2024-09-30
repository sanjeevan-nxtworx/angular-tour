import { Component } from '@angular/core';
import { EventLabelComponent } from './event-label/event-label.component';

@Component({
  selector: 'app-event-binding-label',
  standalone: true,
  imports: [EventLabelComponent],
  templateUrl: './event-binding-label.component.html',
  styleUrl: './event-binding-label.component.css',
})
export class EventBindingLabelComponent {
  personList = [
    {
      name: 'John Doe',
      address: '101, Smart Street, Injland',
      telNo: '+10 99384940',
      src: '/images/user1.png',
      count: 0,
    },
    {
      name: 'Jane Smith',
      address: '1, Harry Storter Street, Hermany',
      telNo: '+12 94398484',
      src: '/images/user4.png',
      count: 0,
    },
    {
      name: 'Joe Fine',
      address: '21, Jerry Lane, Hile',
      telNo: '+1 48338984',
      src: '/images/user2.jpeg',
      count: 0,
    },
  ];

  handleClickCount(index: number) {
    this.personList[index].count++;
    console.log(this.personList);
  }
}
