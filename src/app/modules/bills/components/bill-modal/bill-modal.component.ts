import { Component, OnInit } from '@angular/core';
import { IMyDateModel } from 'mydatepicker';
import UIkit from 'uikit';
import { User } from 'src/app/shared/models/user.model';
import { Bill } from 'src/app/shared/models/bill.model';
import { BillsService } from '../../services/bills.service';

@Component({
    selector: 'app-bill-modal',
    templateUrl: './bill-modal.component.html',
    styleUrls: ['./bill-modal.component.scss']
})
export class BillModalComponent implements OnInit {
    bill: Bill;
    users: User[];
    constructor (private billService: BillsService) { }

    ngOnInit() {
        this.bill = <Bill>{};
    }

    onDateChanged(event: IMyDateModel) {
        this.bill.date = event.jsdate;
        console.log("Setting new date to transaction", this.bill.date);
    }

    onSubmit() {
        console.log('Saving bill...');
        this.billService.addBill(this.bill)
            .then(() => UIkit.modal("#modal-bill").hide())
            .catch((error) => UIkit.notification(error, 'danger'));
    }
}
