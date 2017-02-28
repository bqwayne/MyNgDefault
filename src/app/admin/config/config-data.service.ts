import { Injectable, ModuleWithProviders, OnInit} from '@angular/core';
import { Observable } from 'rxjs'
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export interface IDefaults {
    routeTypes: string[];
    user: string; 
}

@Injectable()
export class ConfigDefaultsService implements OnInit {
    configDefaultsLoc: string = 'src/app/admin/config/defaults.json';

    constructor(private http: Http){}

    ngOnInit() {

    }

    getDefaults(): Observable<IDefaults> {
        return this.http.get(this.configDefaultsLoc).map(response => response.json());
    }

}
