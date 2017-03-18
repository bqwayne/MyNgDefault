import { Component, OnInit, Input } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { MdDialog, MdIconRegistry } from '@angular/material';
import { Router } from '@angular/router';
import { PartnersService, PartnersListFormComponent } from '../';
import { PartnerPortalAPI } from '../../shared';


@Component({
    selector: 'app-partners-list',
    templateUrl: './partners-list.component.html',
    styleUrls: ['./partners-list.component.scss']
})


export class PartnersListComponent implements OnInit {
    @Input('viewType') viewType?: string;
    partnersList;
    length;
    authProvider = localStorage.getItem('authProvider');

    constructor(private partnersservice: PartnersService, 
                private partnerportalapi: PartnerPortalAPI,
                public dialog: MdDialog,
                private router: Router,
                private mdIconRegistry: MdIconRegistry){
                    mdIconRegistry.registerFontClassAlias('fontawesome', 'fa');
                }

    ngOnInit() {
        if (this.authProvider === 'Firebase') {
            console.log("I am trying to get my data from Firebase");
            this.partnersList = <FirebaseListObservable<any[]>> this.partnersservice.getPartners();
            this.partnersList.subscribe(response => this.length = response.length);
        }
        if (this.authProvider === 'PartnerPortalAPI') {
            console.log("I am trying to get my data from PartnerPortalAPI");
            this.partnerportalapi.getPartners(localStorage.getItem('token')).subscribe(res => {
                this.partnersList = res.partners;
                this.length = res.partners.length;
                console.log(this.partnersList);
            });
        }

        if (!this.viewType) {
            this.viewType = 'full';
        }
    }

    goToDetails(key) {
        this.router.navigate(['/partner-details',key])
    }

    getPartnerTypeById(key) {

    }

    getPartnerTierById(key) {
        return this.partnersservice.getPartnerTierById(key);
    }    

    openDialog(partner?) {
        let dialogRef = this.dialog.open(PartnersListFormComponent);
        if (partner) {
            dialogRef.componentInstance.partner = partner;
        }
    }
    deletePartner(key){
        this.partnersservice.deletePartner(key);
    }

}