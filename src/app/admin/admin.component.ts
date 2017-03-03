import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2';
import { ISideBarItemComponent, ITopbarActionsComponent, NavigationDataService, RouteTypesComponent } from './settings/navigation';
import { UsersComponent } from './users'
import { ConfigDefaultsService } from './config';
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
    routeTypes: FirebaseListObservable<any[]>;
    users: FirebaseListObservable<any[]>;

    constructor(private _navigationdataservice: NavigationDataService,
                private _configdefaultsservice: ConfigDefaultsService){}

    ngOnInit(){
        this._navigationdataservice.getTopBarNav().subscribe(response => this.topBarItems = response);
        this._navigationdataservice.getSideBarNav().subscribe(response => this.sideBarItems = response);
        this.users = this._configdefaultsservice.getUsers();
        this.routeTypes = this._configdefaultsservice.getRouteTypes();

        this.ROUTES = ROUTES;
    }
}