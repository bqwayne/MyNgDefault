import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2';
import { MdDialog, MdIconRegistry } from '@angular/material';
import { PartnersService, CompetencyFormComponent } from '../';


@Component({
    selector: 'app-competencies',
    templateUrl: './competencies.component.html',
    styleUrls: ['./competencies.component.scss']
})


export class CompetenciesComponent implements OnInit {
    @Input('viewType') viewType?: string;
    competenciesList: FirebaseListObservable<any[]>;
    length;    

    constructor(private partnersservice: PartnersService, 
                public dialog: MdDialog,
                private mdIconRegistry: MdIconRegistry,
                private router: Router){
                    mdIconRegistry.registerFontClassAlias('fontawesome', 'fa');
                }


    ngOnInit() {
        this.competenciesList = this.partnersservice.getCompetencies();
        this.competenciesList.subscribe(response => this.length = response.length);
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