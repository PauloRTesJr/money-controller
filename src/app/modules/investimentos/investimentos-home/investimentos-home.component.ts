import { Component, OnInit } from "@angular/core";
import { InvestimentosService } from "src/app/shared/services/investimentos/investimentos.service";

@Component({
  selector: "app-investimentos-home",
  templateUrl: "./investimentos-home.component.html",
  styleUrls: ["./investimentos-home.component.scss"]
})
export class InvestimentosHomeComponent implements OnInit {
  investimentosFII = [];

  constructor(private investimentosService: InvestimentosService) {}

  ngOnInit() {}
}
