import { Component } from '@angular/core';
import { UnlessModule } from './unlessdirective/unless.module';

@Component({
  selector: 'app-structuraldirective',
  standalone: true,
  imports: [UnlessModule],
  templateUrl: './structuraldirective.component.html',
  styleUrl: './structuraldirective.component.css',
})
export class StructuraldirectiveComponent {
  isVisible = false;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}
