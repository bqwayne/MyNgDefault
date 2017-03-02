import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { DialogComponent, DialogDisplayComponent } from '../shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: FirebaseListObservable<any[]>;

  constructor(private dialog: MdDialog, private af: AngularFire) { }

  ngOnInit() {
    this.items = this.af.database.list('/config/');
    console.log(this.items);
  }

  openDialog(){
    let dialogRef = this.dialog.open(DialogDisplayComponent);
    dialogRef.componentInstance.title = "Home Component Dialog";
    dialogRef.componentInstance.content = "Here is some content";
  }

}
