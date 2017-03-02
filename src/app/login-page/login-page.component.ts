import { Component, OnInit } from '@angular/core';
import { AuthFire } from '../shared';
import { Router } from '@angular/router';


@Component({
selector: 'app-login-page',
templateUrl: './login-page.component.html',
styleUrls: ['./login-page.component.scss']
})


export class LoginPageComponent implements OnInit {


    constructor(public authFire: AuthFire, private router: Router){}


    ngOnInit() {


    }

    login() {
        this.authFire.loginWithEmail().then(data => this.router.navigate(['']));
    }
}