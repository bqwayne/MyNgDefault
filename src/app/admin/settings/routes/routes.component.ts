import { Component, OnInit, Input } from '@angular/core';
import { Routes } from '@angular/router';


@Component({
    selector: 'app-routes',
    templateUrl: './routes.component.html',
    styleUrls: ['routes.component.scss']
})

export class AppRoutesComponent implements OnInit {
    @Input() ROUTES: Routes;
    
    constructor(){}

    ngOnInit() {
        console.log('Here is the router module')
        console.log(this.ROUTES);
    }

    alert() {
        window.alert("Routes are not configurable via configuration.  See the app/app.routes.ts file.");
    }
}