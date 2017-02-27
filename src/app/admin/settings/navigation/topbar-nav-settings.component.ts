import { Component, ViewEncapsulation, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { MdIconRegistry } from '@angular/material';
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
    @Input() topBarNavigationItems: ITopbarActionsComponent[];

    constructor(){}

    ngOnInit() {
        console.log(this.topBarNavigationItems);
    }
}