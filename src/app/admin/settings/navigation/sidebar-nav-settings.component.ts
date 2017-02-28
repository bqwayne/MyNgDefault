import { Component, ViewEncapsulation, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { MdIconRegistry, MdDialog, MdDialogRef } from '@angular/material';
import { NavigationDataService, ISideBarItemComponent } from './'


@Component({
    selector: 'app-sidenav-settings',
    templateUrl: 'sidebar-nav-settings.component.html',
    styleUrls: ['sidebar-nav-settings.component.scss'],
    viewProviders: [MdIconRegistry],
    encapsulation: ViewEncapsulation.None,
    providers: [NavigationDataService],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class SideBarNavigationSettingsComponent implements OnInit {
    @Input() sideBarNavigationItems: ISideBarItemComponent[];
    dialogRef: MdDialogRef<SideBarItemDialog>;

    constructor(private dialog: MdDialog,
                private mdIconRegistry: MdIconRegistry) {
        mdIconRegistry.registerFontClassAlias('fontawesome', 'fa');
   }

    ngOnInit() {
   
    }

    openDialog(sideBarItems: ISideBarItemComponent[], displayName: string) {
        this.dialogRef = this.dialog.open(SideBarItemDialog);
        this.dialogRef.componentInstance.sideBarItems = sideBarItems;
        this.dialogRef.componentInstance.parentRoute = displayName;
    }  
}

@Component({
    selector: 'sidebar-item-dialog',
    templateUrl: './sidebar-item-dialog.html'
})

export class SideBarItemDialog {
    sideBarItems: ISideBarItemComponent[];
    parentRoute: string;
    
    constructor(public dialogRef: MdDialogRef<SideBarItemDialog>,
                private mdIconRegistry: MdIconRegistry){
                    mdIconRegistry.registerFontClassAlias('fontawesome', 'fa');
                }
    closeDialog(){
        this.dialogRef.close();
    }
}