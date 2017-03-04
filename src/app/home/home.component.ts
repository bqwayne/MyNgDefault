import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { FirebaseListObservable } from 'angularfire2';
import { DialogComponent, DialogDisplayComponent, AuthFire } from '../shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loggedIn: boolean;
  greetingsName: string;

  constructor(private dialog: MdDialog, private af: AuthFire) { }

  ngOnInit() {
    this.loggedIn = this.af.isLoggedIn;
    //this.greetingsName = this.af.displayName;
  }

  openDialog(){
    let dialogRef = this.dialog.open(DialogDisplayComponent);
    dialogRef.componentInstance.title = "Home Component Dialog";
    dialogRef.componentInstance.content = "Here is some content";
  }

}
