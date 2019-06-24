import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import UIkit from 'uikit';

import { User } from 'src/app/shared/models/user.model';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

    userForm: User;
    public maskCpf = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];

    constructor (private userService: UserService, private router: Router) { }

    ngOnInit() {
        this.userForm = <User>{};
    }

    onSubmit() {
        this.userService.addUser(this.userForm)
            .then(() => this.router.navigate(['/bills']))
            .catch((error) => {
                console.log(error);
                UIkit.notification('Alguma coisa de errado não está certo', 'danger')
            });
    }
}
