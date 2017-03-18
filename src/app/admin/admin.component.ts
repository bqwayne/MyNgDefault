import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Routes } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2';
import { ISideBarItemComponent, ITopbarActionsComponent, NavigationDataService, RouteTypesComponent } from './settings/navigation';
import { UsersComponent } from './users'
import { ConfigDefaultsService } from './config';
import { ROUTES } from 'app/app.routes';
import { PartnerPortalAPI, IUsers } from '../shared';

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
    users;
    serviceProvider;

    constructor(private _navigationdataservice: NavigationDataService,
                private _configdefaultsservice: ConfigDefaultsService,
                private _partnerportalapi: PartnerPortalAPI){
                }

    ngOnInit(){
        this._navigationdataservice.getTopBarNav().subscribe(response => this.topBarItems = response);
        this._navigationdataservice.getSideBarNav().subscribe(response => this.sideBarItems = response);
        if (localStorage.getItem('authProvider') === 'Firebase') {
            this.users = <FirebaseListObservable<any[]>> this._configdefaultsservice.getUsers();
        }
        if (localStorage.getItem('authProvider') === 'PartnerPortalAPI') {
            this._partnerportalapi.getUsers(localStorage.getItem('token')).subscribe(res => this.users = res.users);
        }
        this.routeTypes = this._configdefaultsservice.getRouteTypes();

        this.ROUTES = ROUTES;
    }
}