import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { IPartnerDetails, IPartners, IUserDetails, IUsers } from './partner-portal-interfaces'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PartnerPortalAPI {
    private partnerPortalURL: string  = 'http://192.168.0.57/api';

    constructor(private http: Http) {}

    getUsers(token): Observable<IUsers> {
        if  (token) {
            let headers = new Headers( {'Authorization': token } );
            let options = new RequestOptions({ headers: headers });
            return this.http.get(this.partnerPortalURL + "/users", options).map(response => response.json())
                .catch(this.handleError);
        }
    }

    getPartners(token): Observable<IPartners> {
        if (token) {
            let headers = new Headers( {'Authorization': token } );
            let options = new RequestOptions({ headers: headers });
            return this.http.get(this.partnerPortalURL + "/partners", options).map(response => response.json())
                .catch(this.handleError);            
        }
    }

    private handleError(error: any) {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }

}