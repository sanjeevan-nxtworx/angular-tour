import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-label',
  standalone: true,
  imports: [],
  templateUrl: './property-label.component.html',
  styleUrl: './property-label.component.css',
})
export class PropertyLabelComponent {
  @Input() name?: string;
  @Input() address?: string;
  @Input() telNo?: string;
  @Input() src?: string;
}
