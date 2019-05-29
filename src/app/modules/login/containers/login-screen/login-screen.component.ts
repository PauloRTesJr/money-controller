import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
    selector: 'app-login-screen',
    templateUrl: './login-screen.component.html',
    styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {

    email: string;
    password: string;

    constructor (private loginService: LoginService) { }

    ngOnInit() {
    }

    onSubmit() {
        this.loginService.signIn(this.email, this.password);
    }
}
