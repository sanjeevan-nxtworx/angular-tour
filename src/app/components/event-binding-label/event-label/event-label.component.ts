import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-label',
  standalone: true,
  imports: [],
  templateUrl: './event-label.component.html',
  styleUrl: './event-label.component.css',
})
export class EventLabelComponent {
  @Input({ required: true }) name?: string;
  @Input() address?: string;
  @Input() telNo?: string;
  @Input() src?: string;
  @Input() count?: number;
  @Input() index?: number;

  @Output() onClickCount = new EventEmitter<number>();

  handleClick() {
    this.onClickCount.emit(this.index);
  }
}
