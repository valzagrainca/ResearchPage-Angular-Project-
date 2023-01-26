import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBlackbackground]',
})
export class BlackBackgroundDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @Input() set appBlackbackground(condition: boolean) {
    if (condition) {
      this.renderer.addClass(this.element.nativeElement, 'blackbackground');
    } else {
      this.renderer.removeClass(this.element.nativeElement, 'blackbackground');
    }
  }
}
