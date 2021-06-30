import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appMyFocus]'
})
export class MyFocusDirective implements OnInit{

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }
  ngOnInit() {
    const element = this.elementRef.nativeElement;
    element.focus();
    this.renderer2.setStyle(element,'background-color','red');
  }

}
