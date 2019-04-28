import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvestimentosHomeComponent } from './investimentos-home/investimentos-home.component';

const routes: Routes = [
  {
    path: '',
    component: InvestimentosHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestimentosRoutingModule {}
