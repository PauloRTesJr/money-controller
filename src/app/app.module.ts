import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { FirestoreSettingsToken } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { InvestimentosModule } from './modules/investimentos/investimentos.module';
import { LoginModule } from './modules/login/login.module';
import { BillsModule } from './modules/bills/bills.module';

@NgModule({
    declarations: [AppComponent, NavbarComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireAuthModule,
        InvestimentosModule,
        LoginModule,
        BillsModule
    ],
    providers: [{ provide: FirestoreSettingsToken, useValue: {} }],
    bootstrap: [AppComponent]
})
export class AppModule { }
