import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
    {
        path: "investimentos",
        loadChildren:
            "./modules/investimentos/investimentos.module#InvestimentosModule"
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
