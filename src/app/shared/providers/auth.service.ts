import { Injectable } from '@angular/core';
import { tokenNotExpired, provideAuth } from 'angular2-jwt';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class AuthService {
    private partnerPortalURL: string  = 'http://192.168.0.57/api';
    isLoggedIn: boolean = false;

    constructor (private router: Router, private http: Http) {
        //this.jwt = new JwtHelper();
        provideAuth({
            headerPrefix: 'JWT',
            tokenName: 'token',
            tokenGetter: () => localStorage.getItem('token')
        })
        this.isLoggedIn = this.loggedIn();
        }

    login(email, password) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        console.log(JSON.stringify({email: email, password: password}));
        return this.http.post(this.partnerPortalURL + "/authenticate", JSON.stringify({email: email, password: password}), options).toPromise()
            .then(response => {
                console.log(response);
                localStorage.setItem('token', response.json().token);
                this.isLoggedIn = true;
                //localStorage.setItem('profile', this.jwt.decodeToken(response.json().token));
                //console.log(this.jwt.decodeToken(response.json().token));
            }).catch(error => console.log(error));            
    }

    logout() {
        localStorage.removeItem('token');
        //localStorage.removeItem('profile');
        this.isLoggedIn = false;
        this.router.navigateByUrl('/home');
    }

    loggedIn() {
        if (tokenNotExpired('token')) {
            this.isLoggedIn = true;
            return this.isLoggedIn;
        }
        if (!this.isLoggedIn) {
            return this.isLoggedIn;
        }
    }
}