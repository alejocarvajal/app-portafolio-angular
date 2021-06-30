import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appImagenRota]'
})
export class ImagenRotaDirective {
  @Input() urlCustom: string

  constructor(private elementRef: ElementRef) {
    this.urlCustom = '';
  }


  @HostListener('error')
  cargarImagenPorDefecto() {
    const element = this.elementRef.nativeElement
    console.log(element);
    element.src = `https://piotrkowalski.pw/images/pixeltrue-error-1.svg`


  }

}
