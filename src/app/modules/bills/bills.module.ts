import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillsHomeComponent } from './containers/bills-home/bills-home.component';
import { BillsRoutingModule } from './bills-routing.module';
import { AddUserComponent } from './containers/add-user/add-user.component';
import { BillsComponent } from './bills.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [BillsComponent, BillsHomeComponent, AddUserComponent],
    imports: [
        CommonModule,
        BillsRoutingModule,
        FormsModule
    ]
})
export class BillsModule { }
