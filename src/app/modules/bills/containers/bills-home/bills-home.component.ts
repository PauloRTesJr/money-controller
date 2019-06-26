import { Component, OnInit } from '@angular/core';
import { BillsService } from '../../services/bills.service';
import { Bill } from 'src/app/shared/models/bill.model';

@Component({
    selector: 'app-bills-home',
    templateUrl: './bills-home.component.html',
    styleUrls: ['./bills-home.component.scss']
})
export class BillsHomeComponent implements OnInit {
    bills: Bill[];

    constructor (private billsService: BillsService) { }

    ngOnInit() {
        this.billsService.getBills().subscribe((bills) => this.bills = bills);
    }

    get totalDespesas(): number {
        return 0;
    }

    get totalReceitas(): number {
        return 0;
    }

    get total(): number {
        return 0;
    }
}
