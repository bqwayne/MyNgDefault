import { Component, OnInit, Input } from '@angular/core';
import { Routes } from '@angular/router';
import { MdDialog } from '@angular/material';
import { DialogDisplayComponent } from 'app/shared';


@Component({
    selector: 'app-routes',
    templateUrl: './routes.component.html',
    styleUrls: ['routes.component.scss']
})

export class AppRoutesComponent implements OnInit {
    @Input() ROUTES: Routes;
    
    constructor(private dialog: MdDialog){}

    ngOnInit() {
    }

    openDialog() {
        let dialogRef = this.dialog.open(DialogDisplayComponent);
        dialogRef.componentInstance.title = "Routes Info";
        dialogRef.componentInstance.content = "Routes are not configurable via configuration.  See the app/app.routes.ts file.";
    }
}