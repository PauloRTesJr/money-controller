import { Component, OnInit } from "@angular/core";
import { LoginService } from 'src/app/modules/login/services/login.service';

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
    constructor (private loginService: LoginService) { }

    ngOnInit() { }

    get shouldShow() {
        return this.loginService.isLoggedIn;
    }

    logout() {
        this.loginService.logout();
    }
}
