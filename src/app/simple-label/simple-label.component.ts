import { Component } from '@angular/core';
import { HighlightDirective } from './highlight-component';

@Component({
  selector: 'app-simple-label',
  standalone: true,
  imports: [HighlightDirective],
  templateUrl: './simple-label.component.html',
  styleUrl: './simple-label.component.css',
})
export class SimpleLabelComponent {}
