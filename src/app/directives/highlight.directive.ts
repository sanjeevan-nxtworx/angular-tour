// highlight.directive.ts
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  //  @Input() highlightColor: string = 'lightgreen'; // Color on hover
  @Input('appHighlight') highlightColor: string = 'lightgreen'; // Color on hover
  // Inject an element ref on which the directive is placed on
  // into the directive
  constructor(private el: ElementRef) {}

  // Change background color when the mouse enters the element
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor);
  }

  // Reset background color when the mouse leaves the element
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string | null) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
