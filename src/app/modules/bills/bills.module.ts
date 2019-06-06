import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillsHomeComponent } from './containers/bills-home/bills-home.component';
import { BillsRoutingModule } from './bills-routing.module';
import { AddUserComponent } from './containers/add-user/add-user.component';

@NgModule({
    declarations: [BillsHomeComponent, AddUserComponent],
    imports: [
        CommonModule,
        BillsRoutingModule
    ]
})
export class BillsModule { }
