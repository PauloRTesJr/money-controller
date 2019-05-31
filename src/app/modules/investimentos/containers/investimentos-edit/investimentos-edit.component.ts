import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Investimento, Transaction, Income } from 'src/app/shared/models/investimento.model';
import { IMyDateModel } from 'mydatepicker';
import UIkit from 'uikit';
import { InvestimentosService } from '../../services/investimentos/investimentos.service';

@Component({
    selector: 'app-investimentos-edit',
    templateUrl: './investimentos-edit.component.html',
    styleUrls: ['./investimentos-edit.component.scss']
})
export class InvestimentosEditComponent implements OnInit {

    investimentoForm: Investimento;

    transactionAdd: Transaction;

    incomeAdd: Income;

    constructor(private investimentosService: InvestimentosService, private router: Router, private route: ActivatedRoute) {
        this.route.params.subscribe(params => {
            console.log(params['id']) //log the value of id
        });
    }

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

    onChangeType(selected: string) {
        this.investimentoForm.type = parseInt(selected);
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

    onSubmit() {
        this.investimentosService.addInvestimento(this.investimentoForm)
            .then(() => this.router.navigate(['/investimentos']))
            .catch((error) => {
                console.log(error);
                UIkit.notification('Alguma coisa de errado não está certo', 'danger')
            });
    }
}
