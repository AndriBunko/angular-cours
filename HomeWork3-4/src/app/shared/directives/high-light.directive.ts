import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setFontWeight('bold');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setFontWeight('normal');
  }

  private setFontWeight(val: string) {
    this.renderer.setStyle(this.element.nativeElement, 'font-weight', val);
  }
}
