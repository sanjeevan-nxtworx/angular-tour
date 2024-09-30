import { Component, ElementRef, Renderer2, HostListener } from '@angular/core';

@Component({
  selector: '[appHighlight]', // This defines the component as an attribute selector
  standalone: true,
  template: ` <ng-content></ng-content> `,
})
export class HighlightDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // Change background color when the mouse enters the element
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  // Remove the background color when the mouse leaves the element
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  // Helper method to apply the background color
  private highlight(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
