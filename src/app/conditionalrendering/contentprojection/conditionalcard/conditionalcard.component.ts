import { NgIf } from '@angular/common';
import {
  Component,
  AfterContentInit,
  ContentChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-conditionalcard',
  standalone: true,
  imports: [NgIf],
  templateUrl: './conditionalcard.component.html',
  styleUrl: './conditionalcard.component.css',
})
export class ConditionalcardComponent implements AfterContentInit {
  @ContentChild('.body') bodyContent!: ElementRef;
  bodyPresent = false;

  ngAfterContentInit() {
    this.bodyPresent = !!this.bodyContent;
  }
}
