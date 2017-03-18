import { Component, ViewEncapsulation, OnInit, ElementRef, ViewChild, NgZone, Renderer } from '@angular/core';
import { AuthFire, AuthService } from './shared';
import { ITopbarActionsComponent, NavigationDataService, ISideBarItemComponent } from './admin/settings/navigation';
import { MdIconRegistry } from '@angular/material';
import { Router } from '@angular/router';
import { AppMenuComponent } from './shared';



@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NavigationDataService]
})
export class AppComponent implements OnInit {
  public isLoggedIn: boolean;
  topBarActions: ITopbarActionsComponent[];
  sideBarItems: ISideBarItemComponent[];
  selectedSideBarItem: ISideBarItemComponent;

  constructor(mdIconRegistry: MdIconRegistry,
              private _renderer: Renderer,
              private _router: Router,
              private _ngZone: NgZone,
              private _navigationdataservice: NavigationDataService,
              public af: AuthFire,
              private authService: AuthService){}

  public ngOnInit() {

    if (this.af.isLoggedIn || this.authService.isLoggedIn) {
      console.log(`I am logged in with AuthFire: ${this.af.isLoggedIn} and AuthService: ${this.authService.isLoggedIn}`);
      this.isLoggedIn = true;
      localStorage.setItem('authProvider', (this.af.isLoggedIn)? 'Firebase':'PartnerPortalAPI')
    } else {
      this.isLoggedIn = false;
      this._router.navigate['login'];
    }
//    this.af.authFire.auth.subscribe(auth => {
//      if (!!auth) {
//        this.isLoggedIn = true;
        //this.af.displayName = auth.google.displayName;
        //this.af.email = auth.google.email;
//      }
//      else {
//        this.isLoggedIn = false;
//        this._router.navigate['login'];
//      }
//    })
    console.log('App has initialized!!');
    this._navigationdataservice.getTopBarNav().subscribe(response => this.topBarActions = response);
    this._navigationdataservice.getSideBarNav().subscribe(response => this.sideBarItems = response);
      
  }

  logout() {
    if (this.af.isLoggedIn) {
      this.af.authFire.auth.logout();
    }
    if (this.authService.isLoggedIn) {
      this.authService.logout();
    }
  }

  public sideBarItemSelected(sideBarItem: ISideBarItemComponent){
    this.selectedSideBarItem = sideBarItem;
    this._router.navigate([sideBarItem.route]);
  }
  public topBarActionSelected(topBarAction: ITopbarActionsComponent){
    if (topBarAction.routeType === 'alert') {
      alert(topBarAction.target);
    }
    if (topBarAction.routeType === 'route') {
      this._router.navigate([topBarAction.target]);
    }
  }


}
