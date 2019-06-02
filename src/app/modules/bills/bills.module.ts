import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillsHomeComponent } from './containers/bills-home/bills-home.component';
import { BillsRoutingModule } from './bills-routing.module';

@NgModule({
  declarations: [BillsHomeComponent],
  imports: [
    CommonModule,
    BillsRoutingModule
  ]
})
export class BillsModule { }
