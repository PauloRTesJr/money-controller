import { Component, OnInit } from '@angular/core';
import { Investimento } from 'src/app/shared/models/investimento.model';
import { InvestimentosService } from '../services/investimentos/investimentos.service';
import { InvestimentoType } from 'src/app/shared/models/investimento-type.model';

@Component({
    selector: 'app-investimentos-home',
    templateUrl: './investimentos-home.component.html',
    styleUrls: ['./investimentos-home.component.scss']
})
export class InvestimentosHomeComponent implements OnInit {
    private investimentosFII: Investimento[];
    constructor (private investimentosService: InvestimentosService) { }

    ngOnInit() {
        this.investimentosService.getInvestimentos().subscribe(data => {
            this.investimentosFII = data.filter(
                inv => inv.type === InvestimentoType.FII
            );
        });
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
}
