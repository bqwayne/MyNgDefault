import { Component, OnInit } from '@angular/core';
import { ISideBarItemComponent, ITopbarActionsComponent, NavigationDataService } from './settings/navigation';

@Component({
    selector: 'admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {
    topBarItems: ITopbarActionsComponent[];
    sideBarItems: ISideBarItemComponent[];

    constructor(private _navigationdataservice: NavigationDataService){}

    ngOnInit(){
        this._navigationdataservice.getTopBarNav().subscribe(response => this.topBarItems = response);
        this._navigationdataservice.getSideBarNav().subscribe(response => this.sideBarItems = response);
    }
}