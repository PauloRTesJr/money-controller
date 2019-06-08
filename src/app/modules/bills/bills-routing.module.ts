import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillsHomeComponent } from './containers/bills-home/bills-home.component';
import { AddUserComponent } from './containers/add-user/add-user.component';
import { BillsComponent } from './bills.component';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';

const routes: Routes = [
    {
        path: 'bills',
        component: BillsComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                component: BillsHomeComponent
            },
            {
                path: 'add-user',
                component: AddUserComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BillsRoutingModule { }
