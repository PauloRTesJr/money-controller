import { Component, OnInit, Input } from '@angular/core';
import { Investimento } from 'src/app/shared/models/investimento.model';

@Component({
    selector: 'app-investimentos-add',
    templateUrl: './investimentos-add.component.html',
    styleUrls: ['./investimentos-add.component.scss']
})
export class InvestimentosAddComponent implements OnInit {
    @Input()
    investimentoForm: Investimento;
    constructor () { }

    ngOnInit() { }
}
