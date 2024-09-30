import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-label',
  standalone: true,
  imports: [],
  templateUrl: './input-label.component.html',
  styleUrl: './input-label.component.css',
})
export class InputLabelComponent {
  @Input() name?: string;
  @Input() address?: string;
  @Input() telNo?: string;
}
