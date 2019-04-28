import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InvestimentosHomeComponent } from "./investimentos-home/investimentos-home.component";
import { InvestimentosRoutingModule } from "./investimentos-routing.module";

@NgModule({
  declarations: [InvestimentosHomeComponent],
  imports: [CommonModule, InvestimentosRoutingModule]
})
export class InvestimentosModule {}
