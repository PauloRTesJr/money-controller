import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
    {
        path: "investimentos",
        canActivateChild: [AuthGuard],
        loadChildren:
            "./modules/investimentos/investimentos.module#InvestimentosModule"
    },
    {
        path: "login",
        loadChildren:
            "./modules/login/login.module#LoginModule"
    },
    {
        path: "",
        redirectTo: "investimentos",
        pathMatch: "full"
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
