import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { InvestimentoFII } from '../../models/investimentos-fii.model';

@Injectable({
  providedIn: 'root'
})
export class InvestimentosService {
  private investimentosFII: Observable<InvestimentoFII[]>;
  constructor(private db: AngularFirestore) {
    this.investimentosFII = db
      .collection('/investimentos-fii')
      .valueChanges() as Observable<InvestimentoFII[]>;
  }

  getInvestimentosFII(): Observable<InvestimentoFII[]> {
    return this.investimentosFII;
  }
}
