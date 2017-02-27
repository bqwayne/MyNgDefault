import { Component, OnInit } from '@angular/core';
import { ISideBarItemComponent, ITopbarActionsComponent, NavigationDataService } from './settings/navigation';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
    selector: 'admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {
    topBarItems: ITopbarActionsComponent[];
    sideBarItems: ISideBarItemComponent[];

    constructor(private _navigationdataservice: NavigationDataService,
                public diaglog: MdDialog){}

    ngOnInit(){
        this._navigationdataservice.getTopBarNav().subscribe(response => this.topBarItems = response);
        this._navigationdataservice.getSideBarNav().subscribe(response => this.sideBarItems = response);
    }

    openDialog(sideBarItem: ISideBarItemComponent[]) {
        let dialogRef = this.diaglog.open(SideBarItemDialog);
        dialogRef.componentInstance.sideBarItem = sideBarItem;

    }
}

@Component({
    selector: 'sidebar-item-dialog',
    templateUrl: './settings/navigation/sidebar-item-dialog.html'
})

export class SideBarItemDialog {
    sideBarItem: ISideBarItemComponent[];
    
    constructor(public dialogRef: MdDialogRef<SideBarItemDialog>){}
}