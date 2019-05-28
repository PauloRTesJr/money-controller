import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginScreenComponent } from './containers/login-screen/login-screen.component';
import { LoginRoutingModule } from './login-routing-module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [LoginScreenComponent],
    imports: [
        CommonModule,
        LoginRoutingModule,
        FormsModule
    ]
})
export class LoginModule { }
