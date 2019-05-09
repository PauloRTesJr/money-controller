import { Component, OnInit, Input } from '@angular/core';
import { Investimento, Transactions } from 'src/app/shared/models/investimento.model';
import { IMyDateModel } from 'mydatepicker';
import UIkit from 'uikit';

@Component({
    selector: 'app-investimentos-add',
    templateUrl: './investimentos-add.component.html',
    styleUrls: ['./investimentos-add.component.scss']
})
export class InvestimentosAddComponent implements OnInit {
    @Input()
    investimentoForm: Investimento;

    transactionAdd: Transactions;

    constructor () { }

    ngOnInit() {
        this.investimentoForm = <Investimento>{ transactions: [] };
        this.transactionAdd = <Transactions>{};
    }

    onDateChanged(event: IMyDateModel) {
        console.log('onDateChanged(): ', event.date, ' - jsdate: ', new Date(event.jsdate).toLocaleDateString(), ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
        this.transactionAdd.date = event.jsdate
        console.log("Setting new date", this.transactionAdd.date);
    }

    addTransaction() {
        if (this.transactionAdd.date && this.transactionAdd.quantity && this.transactionAdd.quantity) {
            this.investimentoForm.transactions.push(this.transactionAdd);
            this.transactionAdd = Object.create(<Transactions>{});
            UIkit.modal("#transactions-modal").hide();
        } else {
            UIkit.notification('Tempo campo faltando, mano! Preenche tudo aí, carai!', 'danger');
        }
    }

    removeTransaction(index: number) {
        this.investimentoForm.transactions.splice(index, 1);
    }
}
