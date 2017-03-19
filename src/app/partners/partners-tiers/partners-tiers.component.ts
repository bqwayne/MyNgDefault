import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2';
import { MdDialog, MdIconRegistry } from '@angular/material';
import { PartnersService, PartnersTierFormComponent } from '../';
import { TruncatePipe, PartnerPortalAPI } from '../../shared';

@Component({
    selector: 'app-partners-tiers',
    templateUrl: './partners-tiers.component.html',
    styleUrls: ['./partners-tiers.component.scss']
})


export class PartnersTiersComponent implements OnInit {
    @Input('viewType') viewType?: string;
    partnersTiersList;
    length;
    authProvider = localStorage.getItem('authProvider');


    constructor(private partnersservice: PartnersService, 
                private partnerportalapi: PartnerPortalAPI,
                public dialog: MdDialog,
                private mdIconRegistry: MdIconRegistry,
                private router: Router){
                    mdIconRegistry.registerFontClassAlias('fontawesome', 'fa');
                }


    ngOnInit() {
        if(this.authProvider === 'Firebase'){        
            this.partnersTiersList = <FirebaseListObservable<any[]>> this.partnersservice.getPartnersTiers();
            this.partnersTiersList.subscribe(response => this.length = response.length);
        }
        if (this.authProvider === 'PartnerPortalAPI') {
            this.partnerportalapi.getPartnerTiers(localStorage.getItem('token')).subscribe(res => {
                this.partnersTiersList = res.partnerTiers;
                this.length = this.partnersTiersList.length;
            });
        }        
        if (!this.viewType) {
            this.viewType = 'full';
        }
    }

    openDialog(partnersTier?){
        let dialogRef = this.dialog.open(PartnersTierFormComponent);
        if (partnersTier) {
            dialogRef.componentInstance.partnersTier = partnersTier;
        }
    }

    deletePartnersTier(key) {
        this.partnersservice.deletePartnersTier(key);
    }
}