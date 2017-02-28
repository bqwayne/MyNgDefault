import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogContainer, MdDialogContent, MdDialogTitle } from '@angular/material'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {


  constructor(private dialog: MdDialog) { }

  ngOnInit() {
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogDisplayComponent);
    dialogRef.componentInstance.title = "My Dialog";
    dialogRef.componentInstance.content = "Some Content";
  }
}

@Component({
  selector: 'dialog-tag',
  templateUrl: './dialog.component.html',
  })

  export class DialogDisplayComponent implements OnInit {
    title: MdDialogTitle;
    content: MdDialogContent;
    container: MdDialogContainer;


  constructor(public dialogRef: MdDialogRef<DialogDisplayComponent>){}


  ngOnInit() {

  }

  closeDialog() {
    this.dialogRef.close();
  }
}
