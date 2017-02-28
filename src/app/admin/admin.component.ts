import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { ISideBarItemComponent, ITopbarActionsComponent, NavigationDataService, RouteTypesComponent } from './settings/navigation';
import { ConfigDefaultsService, IDefaults } from './config'
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
    defaults: IDefaults;
    routeTypes: string[];
    defaultUser: string;

    constructor(private _navigationdataservice: NavigationDataService,
                private _configdefaultsservice: ConfigDefaultsService){}

    ngOnInit(){
        this._navigationdataservice.getTopBarNav().subscribe(response => this.topBarItems = response);
        this._navigationdataservice.getSideBarNav().subscribe(response => this.sideBarItems = response);
        this._configdefaultsservice.getDefaults().subscribe(response => {
            this.defaults = response;
            this.routeTypes = this.defaults.routeTypes;
            this.defaultUser = this.defaults.user;
        });
        this.ROUTES = ROUTES;
    }
}