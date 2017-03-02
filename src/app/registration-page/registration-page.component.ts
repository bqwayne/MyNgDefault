import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthFire } from '../shared';
import { Router } from '@angular/router';

@Component({
    selector: 'reg-page',
    templateUrl: './registration-page.component.html',
    styleUrls: ['./registration-page.component.scss']
})

export class RegistrationPageModule implements OnInit {
    public errors: any;

    constructor(public af: AuthFire, private router: Router){}

    ngOnInit(){

    }

    register(event, name, email, password) {
        event.preventDefault();
        this.af.registerUser(email,password).then(user =>{
            this.af.saveUserInfoFromForm(user.uid,name,email).then(() => this.router.navigate[''])
            .catch(error => this.errors = error).catch(error => this.errors = error);
        })
    }

}