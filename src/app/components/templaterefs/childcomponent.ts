import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  template: `
    <p>Child Component</p>
    <p>{{ childMethodCalled }}</p>
    <button (click)="childMethod()">Call Child Method</button>
  `,
})
export class ChildComponent {
  childMethodCalled: string = 'child method not called';
  childMethod() {
    console.log('Child method called!');
    this.childMethodCalled = 'child method called!';
  }

  // Exposing a property
  childMessage: string = 'Hello from Child!';
}
