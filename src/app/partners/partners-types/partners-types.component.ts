import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { MdDialog, MdIconRegistry } from '@angular/material';
import { PartnersService, PartnersTypeFormComponent } from '../';


@Component({
    selector: 'app-partners-types',
    templateUrl: './partners-types.component.html',
    styleUrls: ['./partners-types.component.scss']
})


export class PartnersTypesComponent implements OnInit {
    partnersTypesList: FirebaseListObservable<any[]>;

    constructor(private partnersservice: PartnersService, 
                public dialog: MdDialog,
                private mdIconRegistry: MdIconRegistry){
                    mdIconRegistry.registerFontClassAlias('fontawesome', 'fa');
                }

    ngOnInit() {
        this.partnersTypesList = this.partnersservice.getPartnersTypes();
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