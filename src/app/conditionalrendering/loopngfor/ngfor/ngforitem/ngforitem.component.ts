import { Component, Input } from '@angular/core';
import type { itemdef } from '../ngfor.model';
@Component({
  selector: 'app-ngforitem',
  standalone: true,
  imports: [],
  templateUrl: './ngforitem.component.html',
  styleUrl: './ngforitem.component.css',
})
export class NgforitemComponent {
  @Input({ required: true }) index!: number;
  @Input({ required: true }) item!: itemdef;
}
