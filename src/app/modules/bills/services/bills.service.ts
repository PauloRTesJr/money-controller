import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Bill } from 'src/app/shared/models/bill.model';

@Injectable({
    providedIn: 'root'
})
export class BillsService {
    private billsCollection: AngularFirestoreCollection<Bill>;
    private bills: Observable<Bill[]>;

    constructor (private db: AngularFirestore) {
        this.billsCollection = this.db.collection('/bills');
        this.bills = this.billsCollection.valueChanges();
    }

    getBills(): Observable<Bill[]> {
        return this.bills;
    }

    addBill(bill: Bill): Promise<void> {
        const id = this.db.createId();
        const billToAdd: Bill = { id, ...bill };
        return this.billsCollection.doc(id).set(billToAdd);
    }

    removeBill(bill: Bill): Promise<void> {
        return this.billsCollection.doc(bill.id).delete();
    }

    editBill(bill: Bill): Promise<void> {
        return this.billsCollection.doc(bill.id).update(bill);
    }
}
