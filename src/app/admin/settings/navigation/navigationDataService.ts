import { ModuleWithProviders, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ISideBarItemComponent, ITopbarActionsComponent }  from '.././../../navigation';

export class NavigationDataModule implements OnInit {
    data: JSON;
    topBarNavItems: ITopbarActionsComponent[];
    sideBarNavItems: ISideBarItemComponent[];
    dataLoc: string = './navigation.json';


    constructor(private http: Http){}

    ngOnInit() {
        this.data = getNavigationData();
        this.topBarNavItems = getTopBarNav(this.data);
        this.sideBarNavItems = getSideBarNav(this.data)
    }

    public getNavigationData():JSON {
        let returnValue =  JSON.stringify(this.http.get(this.dataLoc).map(response => {
            return response.json();
        }));
        return JSON.parse(returnValue);
        };
    }

    public getTopBarNav(data): ITopbarActionsComponent[] {
        let output = data
        return output;
    }

    public getSideBarNav(data){}


    
}
