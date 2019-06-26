import { Component, OnInit } from '@angular/core';
import { BillsService } from '../../services/bills.service';
import { Bill, BillType } from 'src/app/shared/models/bill.model';

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

    total(type: BillType = null): number {
        let total = 0;
        if (this.bills) {
            this.bills.forEach((bill) => {
                if (type != null) {
                    if (bill.type == type) {
                        total += bill.value;
                    }
                } else {
                    total += bill.value;
                }
            })
            return total;
        }
        return 0;
    }
}
