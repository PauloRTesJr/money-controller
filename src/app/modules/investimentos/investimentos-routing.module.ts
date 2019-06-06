import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvestimentosHomeComponent } from './containers/investimentos-home/investimentos-home.component';
import { InvestimentosAddComponent } from './containers/investimentos-add/investimentos-add.component';
import { InvestimentosEditComponent } from './containers/investimentos-edit/investimentos-edit.component';
import { InvestimentosComponent } from './investimentos.component';

const routes: Routes = [
    {
        path: 'investimentos',
        component: InvestimentosComponent,
        children: [
            {
                path: '',
                component: InvestimentosHomeComponent
            },
            {
                path: 'add',
                component: InvestimentosAddComponent
            },
            {
                path: 'edit/:id',
                component: InvestimentosEditComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InvestimentosRoutingModule { }
