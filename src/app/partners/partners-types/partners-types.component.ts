import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { MdDialog } from '@angular/material';
import { PartnersService, PartnersTypeFormComponent } from '../';


@Component({
    selector: 'app-partners-types',
    templateUrl: './partners-types.component.html',
    styleUrls: ['./partners-types.component.scss']
})


export class PartnersTypesComponent implements OnInit {
    partnersTypesList: FirebaseListObservable<any[]>;

    constructor(private partnersservice: PartnersService, public dialog: MdDialog){}

    ngOnInit() {
        this.partnersTypesList = this.partnersservice.getPartnersTypes();
    }

    openDialog(partnerType?) {
        let dialogRef = this.dialog.open(PartnersTypeFormComponent);
        dialogRef.afterClosed().subscribe(response => {
            console.log(response);
        });
    }
}