import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { ISideBarItemComponent, ITopbarActionsComponent, NavigationDataService } from './settings/navigation';
import { ROUTES } from 'app/app.routes';

@Component({
    selector: 'admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {
    topBarItems: ITopbarActionsComponent[];
    sideBarItems: ISideBarItemComponent[];
    ROUTES: Routes;

    constructor(private _navigationdataservice: NavigationDataService){}

    ngOnInit(){
        this._navigationdataservice.getTopBarNav().subscribe(response => this.topBarItems = response);
        this._navigationdataservice.getSideBarNav().subscribe(response => this.sideBarItems = response);
        this.ROUTES = ROUTES;
    }
}