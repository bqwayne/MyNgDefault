import { Injectable, ModuleWithProviders, OnInit} from '@angular/core';
import { Observable } from 'rxjs'
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export interface IData {
  id?: number;
  menuName: string;
  menuType: string;
  menuListSource?: string;
  menuListItems?: Array<IDataItems>;
}

export interface IDataItems {
  id?: number;
  menuItemName: string;
  icon?: string;
  route: string;
  subMenuItems?: Array<IDataItems>;
}

@Injectable()
export class DataIoService implements OnInit {
    dataIoDataLoc: string = 'src/app/data-io/data-io.data.json';

    constructor(private http: Http){}

    ngOnInit(){}
    
    public getDataItems(): Observable<IData[]>{
        return this.http.get(this.dataIoDataLoc).map(response => response.json());
    }

    public putDataItem(data) {
        this.http.put(this.dataIoDataLoc, JSON.stringify(data));
    }

}