import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2';
import { MdDialog, MdIconRegistry } from '@angular/material';
import { PartnersService, CompetencyLevelFormComponent } from '../';
import { PartnerPortalAPI } from '../../shared';

@Component({
    selector: 'app-competency-levels',
    templateUrl: './competency-levels.component.html',
    styleUrls: ['./competency-levels.component.scss']
})


export class CompetencyLevelsComponent implements OnInit {
    @Input('viewType') viewType?: string;
    competencyLevelsList;
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
            this.competencyLevelsList = <FirebaseListObservable<any[]>> this.partnersservice.getCompetencyLevels();
            this.competencyLevelsList.subscribe(response => this.length = response.length);
        }
        if (this.authProvider === 'PartnerPortalAPI') {
            this.partnerportalapi.getCompetencyLevels(localStorage.getItem('token')).subscribe(res => {
                this.competencyLevelsList = res.competencyLevels;
                this.length = this.competencyLevelsList.length;
            });
        }        
        if (!this.viewType) {
            this.viewType = 'full';
        }
    }

    openDialog(competencyLevel?){
        let dialogRef = this.dialog.open(CompetencyLevelFormComponent);
        if (competencyLevel) {
            dialogRef.componentInstance.competencyLevel = competencyLevel;
        }
    }

    deleteCompetencyLevel(key) {
        this.partnersservice.deleteCompetencyLevel(key);
    }
}