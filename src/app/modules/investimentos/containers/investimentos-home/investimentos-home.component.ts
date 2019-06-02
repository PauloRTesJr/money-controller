import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import UIkit from 'uikit';
import { Investimento } from 'src/app/shared/models/investimento.model';
import { InvestimentosService } from '../../services/investimentos/investimentos.service';
import { InvestimentoType } from 'src/app/shared/models/investimento-type.model';

@Component({
    selector: 'app-investimentos-home',
    templateUrl: './investimentos-home.component.html',
    styleUrls: ['./investimentos-home.component.scss']
})
export class InvestimentosHomeComponent implements OnInit, OnDestroy {
    investimentosFII: Investimento[];
    investimentosAcoes: Investimento[];
    investimentosSubscribe: any;
    constructor(private investimentosService: InvestimentosService, private router: Router) { }

    ngOnInit() {
        this.investimentosSubscribe = this.investimentosService.getInvestimentos().subscribe(data => {
            this.investimentosFII = data.filter(
                inv => inv.type === InvestimentoType.FII
            );
            this.investimentosAcoes = data.filter(
                inv => inv.type === InvestimentoType.Acoes
            );
        });
    }

    ngOnDestroy() {
        this.investimentosSubscribe.unsubscribe();
    }

    getMaxValuePaid(investimento: Investimento) {
        return investimento.value;
    }

    getQuantity(investimento: Investimento) {
        return investimento.transactions.reduce(
            (total, value) => total + value.quantity,
            0
        );
    }

    removeInvestimento(investimento: Investimento) {
        this.investimentosService.removeInvestimento(investimento)
            .then(() => UIkit.notification('SUUU-CE-SSOOOO', 'primary'))
            .catch(() => UIkit.notification('ERROOOOU', 'danger'))
    }

    editInvestimento(investimento: Investimento) {
        this.router.navigateByUrl(`investimentos/edit/${investimento.id}`, { state: investimento });
    }
}
