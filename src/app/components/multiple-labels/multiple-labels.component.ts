import { Component } from '@angular/core';
import { StringInterpolationLabelComponent } from '../string-interpolation-label/string-interpolation-label.component';

@Component({
  selector: 'app-multiple-labels',
  standalone: true,
  imports: [StringInterpolationLabelComponent],
  templateUrl: './multiple-labels.component.html',
  styleUrl: './multiple-labels.component.css',
})
export class MultipleLabelsComponent {}
