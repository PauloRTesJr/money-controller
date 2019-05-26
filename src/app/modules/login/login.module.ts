import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginScreenComponent } from './containers/login-screen/login-screen.component';
import { LoginRoutingModule } from './login-routing-module';

@NgModule({
  declarations: [LoginScreenComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
