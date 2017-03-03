import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { PartnersService } from './partners.service';


@Component({
    selector: 'app-partners',
    templateUrl: './partners.component.html',
    styleUrls: ['./partners.component.scss']
})


export class PartnersComponent implements OnInit {
    partnersList: FirebaseListObservable<any[]>;

    constructor(private partnersservice: PartnersService){}


    ngOnInit() {
        this.partnersList = this.partnersservice.getPartners();

    }
}