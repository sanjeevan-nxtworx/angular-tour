import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LifecycleDemoComponent } from '../lifecycle-demo/lifecycle-demo.component';

@Component({
  selector: 'app-lifecycle-demo-app',
  standalone: true,
  imports: [FormsModule, NgIf, LifecycleDemoComponent],
  templateUrl: './lifecycle-demo-app.component.html',
  styleUrl: './lifecycle-demo-app.component.css',
})
export class LifecycleDemoAppComponent {
  showComponent = true;
  inputValue = '';

  toggleComponent() {
    this.showComponent = !this.showComponent;
  }
}
