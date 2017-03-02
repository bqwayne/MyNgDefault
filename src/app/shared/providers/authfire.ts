import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class AuthFire {
    public messages: FirebaseListObservable<any>;
    public users: FirebaseListObservable<any>;
    public displayName: string;
    public email: string;

    constructor(public authFire: AngularFire){
        this.messages = this.authFire.database.list('messages');
    }

    sendMessage(text) {
        let message = {
            message: text,
            displayName: this.displayName,
            email: this.email,
            timestamp: Date.now()
        };
        this.messages.push(message);
    }
    
    registerUser(email, password) {
        console.log(email);
        return this.authFire.auth.createUser({
            email: email,
            password: password,
        });
    }
    loginWithEmail(email, password) {
        return this.authFire.auth.login({
            email: email, 
            password: password
        },
        {
            provider: AuthProviders.Password,
            method: AuthMethods.Password,
        });
    }

    loginWithGoogle() {
        return this.authFire.auth.login({
            provider: AuthProviders.Google,
            method: AuthMethods.Popup,
        });
    }

    saveUserInfoFromForm(uid, name, email) {
        return this.authFire.database.object('registeredUsers/' + uid).set({
            name: name,
            email: email,
        });
    }

    logout() {
        return this.authFire.auth.logout();
    }
}