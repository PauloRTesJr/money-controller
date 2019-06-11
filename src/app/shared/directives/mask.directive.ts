import { Directive, ElementRef, Input } from '@angular/core';
import VMasker from 'vanilla-masker';

@Directive({
    selector: '[appMask]'
})
export class MaskDirective {

    @Input('maskType') maskType: string;

    constructor (private el: ElementRef) {
        console.log(this.maskType);
        VMasker(el.nativeElement).maskPattern("999.999.999-99");
    }

}
