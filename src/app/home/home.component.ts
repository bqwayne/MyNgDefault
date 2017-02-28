import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { DialogComponent, DialogDisplayComponent } from '../shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dialog: MdDialog) { }

  ngOnInit() {
  }

  openDialog(){
    let dialogRef = this.dialog.open(DialogDisplayComponent);
    dialogRef.componentInstance.title = "Home Component Dialog";
    dialogRef.componentInstance.content = "Here is some content";
  }

}
