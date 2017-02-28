import { Component, ViewEncapsulation, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { MdIconRegistry, MdDialog, MdDialogRef } from '@angular/material';
import { NavigationDataService, ITopbarActionsComponent } from './'


@Component({
    selector: 'app-topnav-settings',
    templateUrl: 'topbar-nav-settings.component.html',
    styleUrls: ['topbar-nav-settings.component.scss'],
    viewProviders: [MdIconRegistry],
    encapsulation: ViewEncapsulation.None,
    providers: [NavigationDataService],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class TopBarNavigationSettingsComponent implements OnInit {
    @Input('topBarNavigationItems') topBarNavigationItems: ITopbarActionsComponent[];
    @Input('routeTypes') routeTypes;

    constructor(private mdIconRegistry: MdIconRegistry,
                private dialog: MdDialog,) {
    mdIconRegistry.registerFontClassAlias('fontawesome', 'fa');
   }

    ngOnInit() {
    }
    openDialog(routeTypes) {
        let dialogRef = this.dialog.open(RouteTypesComponent);
        dialogRef.componentInstance.routeTypes = routeTypes;
    }
}

@Component({ 
    selector: 'route-types',
    templateUrl: './topbar-form-dialog.html',
    styleUrls: ['topbar-nav-settings.component.scss']
})
export class RouteTypesComponent implements OnInit {
    @Input() routeTypes;
    constructor(){}

    ngOnInit() {
    }
}

@Component({
    selector: 'route-types-display',
    templateUrl: './topbar-route-types-display.html'
})
export class RouteTypesDisplayComponent implements OnInit {
    @Input() routeTypes;

    constructor(){}

    ngOnInit() {}
}