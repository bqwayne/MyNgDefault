import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { PartnersService } from './partners.service';
import { PartnerPortalAPI } from '../shared';


@Component({
    selector: 'app-partners',
    templateUrl: './partners.component.html',
    styleUrls: ['./partners.component.scss']
})


export class PartnersComponent implements OnInit {
    partnersList;
    authProvider = localStorage.getItem('authProvider');

    constructor(private partnersservice: PartnersService, private partnerportalapi: PartnerPortalAPI){}


    ngOnInit() {
        if (this.authProvider === 'Firebase') {
            console.log("I am trying to get my data from Firebase");
            this.partnersList = <FirebaseListObservable<any[]>> this.partnersservice.getPartners();
        }
        if (this.authProvider === 'PartnerPortalAPI') {
            console.log("I am trying to get my data from PartnerPortalAPI");
            this.partnerportalapi.getPartners(localStorage.getItem('token')).subscribe(res => this.partnersList = res.partners);
        }
    }
}