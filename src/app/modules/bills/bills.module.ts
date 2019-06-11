import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextMaskModule } from 'angular2-text-mask';
import { BillsHomeComponent } from './containers/bills-home/bills-home.component';
import { BillsRoutingModule } from './bills-routing.module';
import { AddUserComponent } from './containers/add-user/add-user.component';
import { BillsComponent } from './bills.component';
import { FormsModule } from '@angular/forms';
import { MaskDirective } from 'src/app/shared/directives/mask.directive';

@NgModule({
    declarations: [BillsComponent, BillsHomeComponent, AddUserComponent, MaskDirective],
    imports: [
        CommonModule,
        BillsRoutingModule,
        FormsModule,
        TextMaskModule
    ]
})
export class BillsModule { }
