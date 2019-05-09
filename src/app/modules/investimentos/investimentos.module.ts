import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';
import { InvestimentosHomeComponent } from './containers/investimentos-home/investimentos-home.component';
import { InvestimentosRoutingModule } from './investimentos-routing.module';
import { InvestimentosAddComponent } from './containers/investimentos-add/investimentos-add.component';

@NgModule({
    declarations: [InvestimentosHomeComponent, InvestimentosAddComponent],
    imports: [CommonModule, InvestimentosRoutingModule, FormsModule, MyDatePickerModule]
})
export class InvestimentosModule { }
