import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvestimentosHomeComponent } from './investimentos-home/investimentos-home.component';
import { InvestimentosAddComponent } from './investimentos-add/investimentos-add.component';

const routes: Routes = [
  {
    path: '',
    component: InvestimentosHomeComponent
  },
  {
    path: 'add',
    component: InvestimentosAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestimentosRoutingModule {}
