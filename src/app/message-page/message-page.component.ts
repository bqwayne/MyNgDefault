import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { AuthFire } from '../shared';
import { FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'message-page',
    templateUrl: './message-page.component.html',
    styleUrls: ['./message-page.component.scss']
})
export class MessagePageComponent implements OnInit {
    @ViewChild('scrollMe') private myScrollContainer: ElementRef;
    public newMessage: string;
    public messageList: FirebaseListObservable<any>;
    
    constructor(public af: AuthFire) {
        this.messageList = this.af.messages;
    }

    ngAfterViewChecked(){
        this.scrollToBottom();
    }

    isYou(email) {
        if(email == this.af.email)
            return true;
        else
            return false;
    }

    isMe(email) {
        if(email == this.af.email)
            return false;
        else
            return true;
    }

    scrollToBottom(): void {
        try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        } catch(err) { console.log('Scroll to bottom failed yo!') }
    }
    
    // I forgot to add this but thanks for letting me know in the comments so I could update it!
    sendMessage(){
        this.af.sendMessage(this.newMessage);
        this.newMessage = '';
    }
    ngOnInit(){
        
    }
}