import { Component, OnInit } from '@angular/core';
import { InvestimentosService } from 'src/app/shared/services/investimentos/investimentos.service';
import { InvestimentoFII } from 'src/app/shared/models/investimentos-fii.model';

@Component({
  selector: 'app-investimentos-home',
  templateUrl: './investimentos-home.component.html',
  styleUrls: ['./investimentos-home.component.scss']
})
export class InvestimentosHomeComponent implements OnInit {
  private investimentosFII: InvestimentoFII[];
  constructor(private investimentosService: InvestimentosService) {}

  ngOnInit() {
    this.investimentosService.getInvestimentosFII().subscribe(data => {
      this.investimentosFII = data;
      console.log(this.investimentosFII);
    });
  }
}
