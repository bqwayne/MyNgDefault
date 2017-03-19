import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2';
import { MdDialog, MdIconRegistry } from '@angular/material';
import { PartnersService, CompetencyFormComponent } from '../';
import { PartnerPortalAPI } from '../../shared';


@Component({
    selector: 'app-competencies',
    templateUrl: './competencies.component.html',
    styleUrls: ['./competencies.component.scss']
})


export class CompetenciesComponent implements OnInit {
    @Input('viewType') viewType?: string;
    competenciesList;
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
            this.competenciesList = <FirebaseListObservable<any[]>> this.partnersservice.getCompetencies();
            this.competenciesList.subscribe(response => this.length = response.length);
        }
        if (this.authProvider === 'PartnerPortalAPI') {
            this.partnerportalapi.getCompetencies(localStorage.getItem('token')).subscribe(res => {
                this.competenciesList = res.competencies;
                this.length = this.competenciesList.length;
            });
        }          
        if (!this.viewType) {
            this.viewType = 'full';
        }
    }

    openDialog(competency?){
        let dialogRef = this.dialog.open(CompetencyFormComponent);
        if (competency) {
            dialogRef.componentInstance.competency = competency;
        }
    }

    deleteCompetency(key) {
        this.partnersservice.deleteCompetency(key);
    }
}