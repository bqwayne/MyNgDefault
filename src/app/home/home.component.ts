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
  configItems: FirebaseListObservable<any>;
  items: FirebaseListObservable<any>;

  constructor(private dialog: MdDialog, private af: AuthFire) { }

  ngOnInit() {
    this.configItems = this.af.config;
    this.items = this.af.items;
    console.log(this.configItems);
  }

  openDialog(){
    let dialogRef = this.dialog.open(DialogDisplayComponent);
    dialogRef.componentInstance.title = "Home Component Dialog";
    dialogRef.componentInstance.content = "Here is some content";
  }

}
