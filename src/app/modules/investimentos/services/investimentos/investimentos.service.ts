import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Investimento } from 'src/app/shared/models/investimento.model';

@Injectable({
    providedIn: 'root'
})
export class InvestimentosService {
    private investimentos: Observable<Investimento[]>;
    constructor (private db: AngularFirestore) {
        this.investimentos = db
            .collection('/investimentos')
            .valueChanges() as Observable<Investimento[]>;
    }

    getInvestimentos(): Observable<Investimento[]> {
        return this.investimentos;
    }
}
