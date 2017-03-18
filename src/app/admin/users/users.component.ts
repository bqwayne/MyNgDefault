import { Component, OnInit, Input } from '@angular/core';
import { PartnerPortalAPI } from '../../shared';


@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})


export class UsersComponent implements OnInit {
    @Input() users;
    authProvider = localStorage.getItem('authProvider');

    constructor(){}


    ngOnInit() {
    }
}