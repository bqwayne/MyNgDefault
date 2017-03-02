import { Component, ViewEncapsulation, OnInit, ElementRef, ViewChild, NgZone, Renderer } from '@angular/core';
import { AngularFire } from 'angularfire2';
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
  user = {};
  topBarActions: ITopbarActionsComponent[];
  sideBarItems: ISideBarItemComponent[];
  selectedSideBarItem: ISideBarItemComponent;

  constructor(mdIconRegistry: MdIconRegistry,
              private _renderer: Renderer,
              private _router: Router,
              private _ngZone: NgZone,
              private _navigationdataservice: NavigationDataService,
              public af: AngularFire){}

  public ngOnInit() {
    this.af.auth.subscribe( user => {
      if (user) {
        this.user = user;
      }
      else {
        this.user = {};
      }
      console.log(this.user);
    })
    console.log('App has initialized!!');
    this._navigationdataservice.getTopBarNav().subscribe(response => this.topBarActions = response);
    this._navigationdataservice.getSideBarNav().subscribe(response => this.sideBarItems = response);
      
  }

  login() {
    this.af.auth.login({})
  }

  logout() {
    this.af.auth.logout;
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
