import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import VMasker from 'vanilla-masker';

@Directive({
    selector: '[appMask]'
})
export class MaskDirective implements OnInit {

    @Input('appMask') option: string;

    constructor(private el: ElementRef) { }

    ngOnInit() {
        switch (this.option) {
            case 'cpf':
                VMasker(this.el.nativeElement).maskPattern("999.999.999-99");
                break;
        }
    }

}
