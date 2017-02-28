import { Injectable, ModuleWithProviders, OnInit} from '@angular/core';
import { Observable } from 'rxjs'
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export interface ITopbarActionsComponent {
  id?: number;
  actionName: string;
  icon: string;
  routeType: string;
  target: string;
  data?: string;
}

export interface ISideBarItemComponent {
  id?: number;
  displayName: string;
  icon?: string;
  route?: string;
  expanded?: boolean;
  subItems?: Array<ISideBarItemComponent>;
}



@Injectable()
export class NavigationDataService implements OnInit {
    topBarNavItems: ITopbarActionsComponent[];
    sideBarNavItems: ISideBarItemComponent[];
    dataLoc: string = 'src/app/admin/settings/navigation/navigation.json';
    topBarDataLoc: string = 'src/app/admin/settings/navigation/topbar-navigation.json';
    sideBarDataLoc: string = 'src/app/admin/settings/navigation/sidebar-navigation.json';
    data;

    constructor(private http: Http){}

    ngOnInit() {
    }

    public getTopBarNav(): Observable<ITopbarActionsComponent[]> {
        return this.http.get(this.topBarDataLoc).map(response =>  response.json()).catch(response =>{
            return Observable.throw(response.json());
        });
    }

    public setTopBarNav(topBarNavItem: ITopbarActionsComponent){
        // Update (post) the current record

    }

    public addTopBarNav(topBarNavItem: ITopbarActionsComponent){
        // Push new record
    }

    public deleteTopBarNav(topBarNavItem: ITopbarActionsComponent) {
        // Splice existing record
    }

    public getSideBarNav(): Observable<ISideBarItemComponent[]> {
        return this.http.get(this.sideBarDataLoc).map(response => response.json());
    }
 
    public setSideBarNav(sideBarNavItem: ISideBarItemComponent) {
        // Update the current record
    }

    public addSideBarNav(sideBarNavItem: ISideBarItemComponent) {
        // Push new record
    }

    public deleteSideBarNav(sideBarNavItem: ISideBarItemComponent) {
        // Splice existing record
    }   
}
