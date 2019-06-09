import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private usersCollection: AngularFirestoreCollection<User>;
    private users: Observable<User[]>;

    constructor(private db: AngularFirestore) {
        this.usersCollection = this.db.collection('/users');
        this.users = this.usersCollection.valueChanges();
    }
}
