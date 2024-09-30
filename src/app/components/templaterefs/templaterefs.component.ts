import { Component, ViewChild, ElementRef } from '@angular/core';
import { ChildComponent } from './childcomponent';

@Component({
  selector: 'app-templaterefs',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './templaterefs.component.html',
  styleUrl: './templaterefs.component.css',
})
export class TemplaterefsComponent {
  name: string = '';
  city: string = '';
  // Property to hold the message from the child component
  childMessage: string = '';

  @ViewChild('inputCity', { static: true }) inputCity!: ElementRef;

  @ViewChild('childComponent', { static: false }) child!: ChildComponent;

  // Function to display the input value
  displayValue(value: string) {
    this.name = value;
  }

  // Function to display the input value
  displayCity() {
    this.city = this.inputCity.nativeElement.value;
  }

  // Method to access child's method and property
  accessChildMethod() {
    // Call the child component's method
    this.child.childMethod();

    // Access the child component's property
    this.childMessage = this.child.childMessage;
  }
}
