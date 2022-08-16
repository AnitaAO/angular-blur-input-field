import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private el: ElementRef) { }

  @Input('appInputFormat') format: any;

  @HostListener('blur') onBlur(){
    let value = this.el.nativeElement.value;

    if(this.format == 'lowercase')
      this.el.nativeElement.value = value.toLowercase();
    else
      this.el.nativeElement.value = value.toUppercase();
  }

}