import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
        this._firebaseAuth.authState.subscribe(
            (user) => {
                if (user) {
                    localStorage.setItem('user', JSON.stringify(user));
                    this.router.navigate(['/investimentos'])
                }
                else {
                    localStorage.setItem('user', null);
                }
            }
        );
    }

    signIn(email: string, password: string) {
        this._firebaseAuth.auth.signInWithEmailAndPassword(email, password)
            .then((result) => console.log(result))
            .catch(error => console.log(error));
    }

    get isLoggedIn() {
        const user = JSON.parse(localStorage.getItem('user'));
        return user !== null;
    }
    logout() {
        this._firebaseAuth.auth.signOut()
            .then((res) => this.router.navigate(['/login']));
    }
}
