import { Directive,ElementRef,Renderer2,HostListener } from '@angular/core';

@Directive({
  selector: '[appResaltador]',
  standalone: true
})
//[30-10-2023]
export class ResaltadorDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }
  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'background-color');
  }
}