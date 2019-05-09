import { Component, OnInit, Input } from '@angular/core';
import { Investimento, Transaction, Income } from 'src/app/shared/models/investimento.model';
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

    transactionAdd: Transaction;

    incomeAdd: Income;

    constructor () { }

    ngOnInit() {
        this.investimentoForm = <Investimento>{ transactions: [], incomes: [] };
        this.transactionAdd = <Transaction>{};
        this.incomeAdd = <Income>{};
    }

    onDateChanged(event: IMyDateModel, isTransaction: boolean) {
        if (isTransaction) {
            this.transactionAdd.date = event.jsdate
            console.log("Setting new date to transaction", this.transactionAdd.date);
        } else {
            this.incomeAdd.date = event.jsdate
            console.log("Setting new date to income", this.incomeAdd.date);
        }
    }

    addTransaction() {
        if (this.transactionAdd.date && this.transactionAdd.quantity && this.transactionAdd.quantity) {
            this.investimentoForm.transactions.push(this.transactionAdd);
            this.transactionAdd = Object.create(<Transaction>{});
            UIkit.modal("#transactions-modal").hide();
        } else {
            UIkit.notification('Tempo campo faltando, mano! Preenche tudo aí, carai!', 'danger');
        }
    }

    removeTransaction(index: number) {
        this.investimentoForm.transactions.splice(index, 1);
    }

    addIncome() {
        if (this.incomeAdd.date && this.incomeAdd.value_paid) {
            this.investimentoForm.incomes.push(this.incomeAdd);
            this.incomeAdd = Object.create(<Transaction>{});
            UIkit.modal("#incomes-modal").hide();
        } else {
            UIkit.notification('Tempo campo faltando, mano! Preenche tudo aí, carai!', 'danger');
        }
    }
}
