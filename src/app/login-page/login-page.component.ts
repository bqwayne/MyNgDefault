import { Component, OnInit } from '@angular/core';
import { AuthFire, AuthService } from '../shared';
import { Router } from '@angular/router';


@Component({
selector: 'app-login-page',
templateUrl: './login-page.component.html',
styleUrls: ['./login-page.component.scss']
})


export class LoginPageComponent implements OnInit {
    public errors: any;
    isLoggedIn: boolean = false;
    authProvider = localStorage.getItem('authProvider');

    constructor(public authFire: AuthFire, private router: Router, private authService: AuthService){}

    ngOnInit() {
        switch(this.authProvider) {
            case 'Firebase':
                this.isLoggedIn = this.authFire.isLoggedIn;
                break;
            case 'PartnerPortalAPI':
                this.isLoggedIn = this.authService.loggedIn();
                break;
            default:
                this.isLoggedIn = false;
        }
    }

    loginWithGoogle() {
        this.authFire.loginWithGoogle().then(data => this.router.navigate(['']));
    }

    loginWithEmail(event, email, password, provider){
        event.preventDefault();
        if (provider === 'Firebase') {
            this.authFire.loginWithEmail(email, password)
                .then(() => this.router.navigate[''])
                .catch(error => {
                    this.errors = error,
                    console.log(this.errors)
                });
                localStorage.setItem('authProvider', 'Firebase');
        }
        if (provider === 'PartnerPortalAPI') {
            this.authService.login(email, password);
            localStorage.setItem('authProvider', 'PartnerPortalAPI');
        }
    }
    logout() {
        this.authFire.logout();
        this.authService.logout();
    }
    cancel() {
        this.router.navigateByUrl("/");
    }
}