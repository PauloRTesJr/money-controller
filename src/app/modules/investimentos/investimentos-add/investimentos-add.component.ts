import { Component, OnInit, Input } from '@angular/core';
import { Investimento, Transactions } from 'src/app/shared/models/investimento.model';

@Component({
    selector: 'app-investimentos-add',
    templateUrl: './investimentos-add.component.html',
    styleUrls: ['./investimentos-add.component.scss']
})
export class InvestimentosAddComponent implements OnInit {
    @Input()
    investimentoForm: Investimento;
    constructor () { }

    ngOnInit() {
        this.investimentoForm = <Investimento>{};
    }

    addEmptyTransaction() {
        if (!this.investimentoForm.transactions) {
            this.investimentoForm.transactions = [];
        }
        this.investimentoForm.transactions.push(<Transactions>{});
    }

    removeTransaction(index: number) {
        this.investimentoForm.transactions.splice(index, 1);
    }
}
