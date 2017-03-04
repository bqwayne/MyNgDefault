import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2';
import { MdDialog, MdIconRegistry } from '@angular/material';
import { PartnersService, PartnersTierFormComponent } from '../';
import { TruncatePipe } from '../../shared';

@Component({
    selector: 'app-partners-tiers',
    templateUrl: './partners-tiers.component.html',
    styleUrls: ['./partners-tiers.component.scss']
})


export class PartnersTiersComponent implements OnInit {
    @Input('viewType') viewType?: string;
    partnersTiersList: FirebaseListObservable<any[]>;
    length;


    constructor(private partnersservice: PartnersService, 
                public dialog: MdDialog,
                private mdIconRegistry: MdIconRegistry,
                private router: Router){
                    mdIconRegistry.registerFontClassAlias('fontawesome', 'fa');
                }


    ngOnInit() {
        this.partnersTiersList = this.partnersservice.getPartnersTiers();
        this.partnersTiersList.subscribe(response => this.length = response.length);
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