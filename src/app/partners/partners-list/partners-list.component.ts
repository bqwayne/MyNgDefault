import { Component, OnInit, Input } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { MdDialog, MdIconRegistry } from '@angular/material';
import { Router } from '@angular/router';
import { PartnersService, PartnersListFormComponent } from '../';


@Component({
    selector: 'app-partners-list',
    templateUrl: './partners-list.component.html',
    styleUrls: ['./partners-list.component.scss']
})


export class PartnersListComponent implements OnInit {
    @Input('viewType') viewType?: string;
    partnersList: FirebaseListObservable<any[]>;
    length;

    constructor(private partnersservice: PartnersService, 
                public dialog: MdDialog,
                private router: Router,
                private mdIconRegistry: MdIconRegistry){
                    mdIconRegistry.registerFontClassAlias('fontawesome', 'fa');
                }

    ngOnInit() {
        this.partnersList = this.partnersservice.getPartners();
        this.partnersList.subscribe(response => this.length = response.length);
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