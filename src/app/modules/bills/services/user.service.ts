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

    getUsers(): Observable<User[]> {
        return this.users;
    }

    addUser(user: User): Promise<void> {
        const id = this.db.createId();
        const userToAdd: User = { id, ...user };
        return this.usersCollection.doc(id).set(userToAdd);
    }

    removeUser(user: User): Promise<void> {
        return this.usersCollection.doc(user.id).delete();
    }

    editUser(user: User): Promise<void> {
        return this.usersCollection.doc(user.id).update(user);
    }
}
