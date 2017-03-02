import { Component, ViewEncapsulation, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MdIconRegistry, MdDialog, MdDialogRef } from '@angular/material';
import { NavigationDataService, ITopbarActionsComponent } from '../';


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
                private dialog: MdDialog) {
    mdIconRegistry.registerFontClassAlias('fontawesome', 'fa');
   }

    ngOnInit() {

    }
    openDialog(routeTypes, topBarNavItem?: ITopbarActionsComponent) {
        let dialogRef = this.dialog.open(RouteTypesComponent);
        dialogRef.componentInstance.routeTypes = routeTypes;
        if (topBarNavItem) {
            dialogRef.componentInstance.currentTopBarNavItem = topBarNavItem;
        }
    }
}

@Component({ 
    selector: 'route-types',
    templateUrl: './topbar-form-dialog.html',
    styleUrls: ['topbar-nav-settings.component.scss']
})
export class RouteTypesComponent implements OnInit {
    @Input() routeTypes;
    @Input() currentTopBarNavItem?: ITopbarActionsComponent;
    topBarItemForm: FormGroup;

    constructor(private formBuilder: FormBuilder){}

    ngOnInit() {
        this.topBarItemForm = this.formBuilder.group({
            actionNameInput: '',
            iconInput: '',
            routeTypeInput: '',
            targetInput: ''
        });
        if (this.currentTopBarNavItem){
            this.topBarItemForm.setValue({
                actionNameInput: this.currentTopBarNavItem.actionName,
                iconInput: this.currentTopBarNavItem.icon,
                routeTypeInput: this.currentTopBarNavItem.routeType,
                targetInput: this.currentTopBarNavItem.target
            });
        }
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