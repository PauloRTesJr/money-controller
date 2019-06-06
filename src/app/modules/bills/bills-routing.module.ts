import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillsHomeComponent } from './containers/bills-home/bills-home.component';
import { AddUserComponent } from './containers/add-user/add-user.component';

const routes: Routes = [
    {
        path: '',
        component: BillsHomeComponent
    },
    {
        path: 'add-user',
        component: AddUserComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BillsRoutingModule { }
