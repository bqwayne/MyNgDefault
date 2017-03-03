import { Component, OnInit, Input } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';


@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})


export class UsersComponent implements OnInit {
    @Input() users: FirebaseListObservable<any[]>;

    constructor(){}


    ngOnInit() {
    }
}