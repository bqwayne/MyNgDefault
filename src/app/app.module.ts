import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, PreloadAllModules } from '@angular/router';

import 'hammerjs';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin';
import { HomeComponent } from './home';
import { NavTopbarComponent, NavTopbarActionComponent, NavSidebarListComponent, NavSidebarListItemComponent } from './navigation';
import {  ITopbarActionsComponent, 
          ISideBarItemComponent, 
          NavigationDataService, 
          TopBarNavigationSettingsComponent, 
          SideBarNavigationSettingsComponent, 
          SideBarItemDialog,
          RouteTypesComponent,
          RouteTypesDisplayComponent,
          IMenus,
          MenuItemService } from './admin/settings/navigation';
import { ConfigDefaultsService } from './admin/config';
import { AppRoutesComponent } from './admin/settings/routes';
import { DialogComponent, DialogDisplayComponent, ActionTypeDirective, AppMenuComponent } from './shared';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    NavTopbarComponent,
    NavTopbarActionComponent,
    NavSidebarListComponent,
    NavSidebarListItemComponent,
    TopBarNavigationSettingsComponent,
    SideBarNavigationSettingsComponent,
    SideBarItemDialog,
    RouteTypesComponent,
    RouteTypesDisplayComponent,
    AppRoutesComponent,
    DialogComponent,
    DialogDisplayComponent,
    AppMenuComponent,
    ActionTypeDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules}),
    MaterialModule
  ],
  entryComponents: [
    SideBarItemDialog,
    DialogDisplayComponent,
    RouteTypesComponent
  ],
  providers: [NavigationDataService, ConfigDefaultsService, MenuItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
