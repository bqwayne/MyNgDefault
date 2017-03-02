import { Component, OnInit, Injectable, Input, ElementRef, Renderer } from '@angular/core';
import { MdMenuModule, MdMenu, MdMenuTrigger } from '@angular/material';
import { MenuItemService, IMenus, ITopbarActionsComponent } from '../../admin/settings/navigation';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: [ './menu.component.scss']
})
export class AppMenuComponent implements OnInit {
    @Input('menu-item') topBarAction: ITopbarActionsComponent;
    menuName: string;
    menuItems: IMenus[];
    selectedMenuItem: IMenus;

    constructor(private _menuitemservice: MenuItemService,
                private el: ElementRef){}

    ngOnInit(){
        this.menuName = this.topBarAction.actionName;;
        this._menuitemservice.getMenuItems().subscribe(response =>{
            this.menuItems = response;
            this.menuItems.forEach(menuItem =>{
                if (menuItem.menuName === this.menuName) {
                    this.selectedMenuItem = menuItem;
                    console.log("The selectedMenuItem.menuType is: " + this.selectedMenuItem.menuType);
                }
            });
        });
       
    }
}