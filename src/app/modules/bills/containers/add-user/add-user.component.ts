import { Component, OnInit, AfterContentInit } from '@angular/core';
import VMasker from 'vanilla-masker';

import { User } from 'src/app/shared/models/user.model';

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit, AfterContentInit {

    userForm: User;

    constructor () { }

    ngOnInit() {
        this.userForm = <User>{};
    }

    ngAfterContentInit() {

    }

}
