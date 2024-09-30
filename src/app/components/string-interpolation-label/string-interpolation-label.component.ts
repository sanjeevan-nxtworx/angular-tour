import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation-label',
  standalone: true,
  imports: [],
  templateUrl: './string-interpolation-label.component.html',
  styleUrl: './string-interpolation-label.component.css',
})
export class StringInterpolationLabelComponent {
  name = 'Joe Smith';
  address = '9876 Oak Avenue, Metropolis';
  telNo = '098-765-4321';
}
