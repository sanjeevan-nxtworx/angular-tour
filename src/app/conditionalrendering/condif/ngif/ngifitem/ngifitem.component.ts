import { Component, Input } from '@angular/core';
import type { itemdef } from '../../../loopngfor/ngfor/ngfor.model';
import { NgClass, NgIf } from '@angular/common';
import { HighlightDirective } from '../../../../directives/highlight.directive';

@Component({
  selector: 'app-ngifitem',
  standalone: true,
  imports: [NgIf, NgClass, HighlightDirective],
  templateUrl: './ngifitem.component.html',
  styleUrl: './ngifitem.component.css',
})
export class NgifitemComponent {
  @Input({ required: true }) index!: number;
  @Input({ required: true }) item!: itemdef;
  highlightColor = 'lightgreen';

  isEmpty(): boolean {
    if (this.item.qty === 0) return true;
    return false;
  }
}
