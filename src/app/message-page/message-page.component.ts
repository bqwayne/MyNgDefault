import { Component, OnInit } from '@angular/core';
import { AuthFire } from '../shared';
import { FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'message-page',
    templateUrl: './message-page.component.html',
    styleUrls: ['./message-page.component.scss']
})
export class MessagePageComponent implements OnInit {
    public newMessage: string;
    public messageList: FirebaseListObservable<any>;
    constructor(public af: AuthFire) {
        this.messageList = this.af.messages;
    }

    ngOnInit(){
        
    }
}