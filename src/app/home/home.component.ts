import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { FirebaseListObservable } from 'angularfire2';
import { DialogComponent, DialogDisplayComponent, AuthFire, AuthService, PartnerPortalAPI } from '../shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loggedIn: boolean;
  myAuthProvider: string;
  greetingsName: string;
  users;

  constructor(private dialog: MdDialog, private af: AuthFire, private authService: AuthService, private parterApi: PartnerPortalAPI) { }

  ngOnInit() {
    if (this.af.isLoggedIn || this.authService.isLoggedIn) {
      this.loggedIn = true;
      this.myAuthProvider = (this.af.isLoggedIn) ? 'Firebase' : 'PartnerPortal API';
    }
  }

  openDialog(){
    let dialogRef = this.dialog.open(DialogDisplayComponent);
    dialogRef.componentInstance.title = "Home Component Dialog";
    dialogRef.componentInstance.content = "Here is some content";
  }

}
