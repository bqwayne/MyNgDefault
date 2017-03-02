import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class AuthFire {
    constructor(public authFire: AngularFire){}

    loginWithEmail() {
        return this.authFire.auth.login({email: 'wjallsup@yahoo.com', password: 'P@ssw0rd'});
    }

    logout() {
        return this.authFire.auth.logout();
    }
}