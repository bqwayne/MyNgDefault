import { Component, ViewEncapsulation, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { MdIconRegistry } from '@angular/material';
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

    constructor(){}

    ngOnInit() {
        console.log(this.sideBarNavigationItems);
    }
}