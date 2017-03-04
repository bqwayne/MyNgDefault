import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PartnersTiersComponent, PartnersTypesComponent } from '../';


@Component({
    selector: 'app-program-mgmt',
    templateUrl: './program-mgmt.component.html',
    styleUrls: ['./program-mgmt.component.scss']
})


export class ProgramMgmtComponent implements OnInit {
    viewType: string = 'brief';


    constructor(private router: Router){}


    ngOnInit() {


    }
}