import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillsHomeComponent } from './containers/bills-home/bills-home.component';

const routes: Routes = [
    {
        path: '',
        component: BillsHomeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BillsRoutingModule { }
