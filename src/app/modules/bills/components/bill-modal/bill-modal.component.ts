import { Component, OnInit } from '@angular/core';
import { IMyDateModel } from 'mydatepicker';
import UIkit from 'uikit';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-bill-modal',
    templateUrl: './bill-modal.component.html',
    styleUrls: ['./bill-modal.component.scss']
})
export class BillModalComponent implements OnInit {
    bill: any;
    users: User[];
    constructor (private userService: UserService) { }

    ngOnInit() {
        this.bill = {};
        this.userService.getUsers().subscribe((users) => this.users = users);
    }

    onDateChanged(event: IMyDateModel) {
        this.bill.date = event.jsdate
        console.log("Setting new date to transaction", this.bill.date);
    }

}
