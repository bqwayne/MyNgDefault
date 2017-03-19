import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2';
import { MdDialog, MdIconRegistry } from '@angular/material';
import { PartnersService, PartnersTypeFormComponent } from '../';
import { PartnerPortalAPI } from '../../shared';


@Component({
    selector: 'app-partners-types',
    templateUrl: './partners-types.component.html',
    styleUrls: ['./partners-types.component.scss']
})


export class PartnersTypesComponent implements OnInit {
    @Input('viewType') viewType?: string;
    partnersTypesList;
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
            this.partnersTypesList = <FirebaseListObservable<any[]>> this.partnersservice.getPartnersTypes();
            this.partnersTypesList.subscribe(response => this.length = response.length);
        }
        if (this.authProvider === 'PartnerPortalAPI') {
            this.partnerportalapi.getPartnerTypes(localStorage.getItem('token')).subscribe(res => {
                this.partnersTypesList = res.partnerTypes;
                this.length = this.partnersTypesList.length;
            });
        }
        if (!this.viewType) {
            this.viewType = 'full';
        }
    }

    openDialog(partnersType?) {
        let dialogRef = this.dialog.open(PartnersTypeFormComponent);
        if (partnersType) {
            console.log(partnersType.$key);
            dialogRef.componentInstance.partnersType = partnersType;
        }
        dialogRef.afterClosed().subscribe(response => {
            console.log(response);
        });
    }
    deletePartnersType(key){
        this.partnersservice.deletePartnersType(key);
    }

}