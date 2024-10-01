import { JsonPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  standalone: true,
  imports: [FormsModule, JsonPipe, NgIf],
  templateUrl: './templateform.component.html',
  styleUrl: './templateform.component.css',
})
export class TemplateformComponent {
  title = 'Template Driven Form Example';

  // Create a model for the form
  user = {
    name: '',
    email: '',
    password: '',
  };

  // Method to handle form submission
  onSubmit() {
    console.log('Form Submitted!', this.user);
  }
}
