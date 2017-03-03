import { Injectable, ModuleWithProviders, OnInit} from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs'
import { Http } from '@angular/http';

import { AuthFire } from '../../shared';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ConfigDefaultsService implements OnInit {
    configDefaultsBase: string = 'config/defaults';
    routeTypesLoc: string = this.configDefaultsBase + '/routeTypes';
    usersLoc: string = this.configDefaultsBase + '/users';

    constructor(private http: Http, public af: AuthFire){}

    ngOnInit() {

    }

    getUsers() {
        return this.af.authFire.database.list(this.usersLoc);
    }

    getRouteTypes(){
        return this.af.authFire.database.list(this.routeTypesLoc);
    }

}
