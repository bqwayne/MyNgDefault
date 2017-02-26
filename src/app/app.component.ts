import { Component, ViewEncapsulation, OnInit, ElementRef, ViewChild, NgZone, Renderer } from '@angular/core';
import { ISideBarItemComponent } from './navigation/nav-sidebar.component';
import { ITopbarActionsComponent } from './navigation/nav-topbar.component';
import { MdIconRegistry } from '@angular/material';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  public sideBarItems: ISideBarItemComponent[] = [
    {displayName: 'Home', route: 'home', icon: 'fa-home'},
    {
      displayName: 'Partners', route: 'partner', icon: 'fa-handshake-o',
      subItems: [
        {displayName: 'Partners Home', route: 'partner', icon: 'fa-handshake-o'},
        {displayName: 'NAM List', route: 'partner-list', icon: 'fa-handshake-o'},
        {displayName: 'Types', route: 'partner-types', icon: 'fa-handshake-o'}
      ]
    },
    {
      displayName: 'About', route: 'about', icon: 'fa-info-circle',
      subItems: [
        {displayName: 'Langing Page', route: 'about', icon: 'fa-info-circle'},
      ]
    },
  ];

  public selectedSideBarItem: ISideBarItemComponent = this.sideBarItems[0];

  public topBarActions: ITopbarActionsComponent[] = [
    {actionName: 'alert', routeType: 'alert', target: 'Alert icon clicked!', icon: 'fa-bell'},
    {actionName: 'help', routeType: 'alert', target: 'Help icon clicked!', icon: 'fa-question'},
    {actionName: 'menu', routeType: 'alert', target: 'Menu icon clicked!', icon: 'fa-bars'},
    {actionName: 'admin', routeType: 'route', target: 'admin', icon: 'fa-user'}
  ]

  constructor(mdIconRegistry: MdIconRegistry,
              private _renderer: Renderer,
              private _router: Router,
              private _ngZone: NgZone){
  }

  public ngOnInit() {
    console.log('App has initialized!!');
  }

  public sideBarItemSelected(sideBarItem: ISideBarItemComponent){
    let logMessage = 'sideBarItemSelected: ' + sideBarItem.displayName
    console.log(logMessage);
    this.selectedSideBarItem = sideBarItem;
    this._router.navigate([sideBarItem.route]);
  }
  public topBarActionSelected(topBarAction: ITopbarActionsComponent){
    let logMessage = "topBarItemSelected: "  + topBarAction.actionName;
    console.log(logMessage);
    //this._router.navigate([topBarAction.route])
    if (topBarAction.routeType === 'alert') {
      alert(topBarAction.target);
    }
    if (topBarAction.routeType === 'route') {
      this._router.navigate([topBarAction.target]);
    }
  }


}
