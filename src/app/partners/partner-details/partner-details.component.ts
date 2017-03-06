import { Component, OnInit, Input } from '@angular/core';
import { MdDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2';
import { PartnersService } from '../';


@Component({
    selector: 'app-partner-details',
    templateUrl: './partner-details.component.html',
    styleUrls: ['./partner-details.component.scss']
})

export class PartnerDetailsComponent implements OnInit {
    partner;
    id;

    constructor( private partnersservice: PartnersService,
                 private dialog: MdDialog, 
                 private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.params.subscribe(params => this.id = params);
        this.partner = this.partnersservice.getPartnerById(this.id);
    }

    openDialog(section) {
        let dialogRef = this.dialog.open(section);
    }
}