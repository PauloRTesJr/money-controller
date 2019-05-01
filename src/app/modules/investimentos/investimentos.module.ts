import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InvestimentosHomeComponent } from "./investimentos-home/investimentos-home.component";
import { InvestimentosRoutingModule } from "./investimentos-routing.module";
import { InvestimentosAddComponent } from './investimentos-add/investimentos-add.component';

@NgModule({
  declarations: [InvestimentosHomeComponent, InvestimentosAddComponent],
  imports: [CommonModule, InvestimentosRoutingModule]
})
export class InvestimentosModule {}
