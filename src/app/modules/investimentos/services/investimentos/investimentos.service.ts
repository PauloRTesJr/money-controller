import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Investimento } from 'src/app/shared/models/investimento.model';

@Injectable({
    providedIn: 'root'
})
export class InvestimentosService {
    private investimentosCollection: AngularFirestoreCollection<Investimento>;
    private investimentos: Observable<Investimento[]>;
    constructor (private db: AngularFirestore) {
        // Save collection from database to reuse as variable
        this.investimentosCollection = this.db
            .collection('/investimentos');
        this.investimentos = this.investimentosCollection.valueChanges();
    }

    getInvestimentos(): Observable<Investimento[]> {
        return this.investimentos;
    }

    addInvestimento(investimento: Investimento): Promise<void> {
        const id = this.db.createId();
        const investimentoToAdd: Investimento = { id, ...investimento };
        return this.investimentosCollection.doc(id).set(investimentoToAdd);
    }

    removeInvestimento(investimento: Investimento): Promise<void> {
        return this.investimentosCollection.doc(investimento.id).delete();
    }

    getInvestimentoById(id: string) {
        return this.investimentosCollection.doc(id).get();
    }
}
