import { Injectable, ModuleWithProviders, OnInit} from '@angular/core';
import { Observable } from 'rxjs'
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export interface IMenus {
  id?: number;
  menuName: string;
  menuType: string;
  menuListSource?: string;
  menuItems?: Array<IMenuItems>;
}

export interface IMenuItems {
  id?: number;
  menuItemName: string;
  icon?: string;
  route: string
}

@Injectable()
export class MenuItemService implements OnInit {
    menuDataLoc: string = 'src/app/admin/settings/navigation/menu-items.json';

    constructor(private http: Http){}

    ngOnInit(){}
    
    public getMenuItems(): Observable<IMenus[]>{
        return this.http.get(this.menuDataLoc).map(response => response.json());
    }

}