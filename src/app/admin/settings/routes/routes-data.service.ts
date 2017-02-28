import { Routes } from '@angular/router';
import { Injectable, ModuleWithProviders, OnInit} from '@angular/core';
import { Observable } from 'rxjs'
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RoutesDataService implements OnInit {
    routesDataLoc: string = 'src/app/admin/settings/routes/routes.json';
    routeItems: Routes[];

    constructor(private http: Http){}

    ngOnInit() {
        
    }

    public getRoutes(): Observable<Routes[]> {
        return this.http.get(this.routesDataLoc).map(response => this.routeItems = response.json()).catch(response =>{
            return Observable.throw(response.json());
        });
    }
}