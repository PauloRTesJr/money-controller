import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginScreenComponent } from './containers/login-screen/login-screen.component';
import { LoginComponent } from './login.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        children: [
            {
                path: '',
                component: LoginScreenComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule { }
