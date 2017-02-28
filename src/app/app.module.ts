import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
          SideBarItemDialog } from './admin/settings/navigation';
import { AppRoutesComponent } from './admin/settings/routes';
import { DialogComponent } from './shared/dialog/dialog.component';


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
    AppRoutesComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules}),
    MaterialModule
  ],
  entryComponents: [
    SideBarItemDialog
  ],
  providers: [NavigationDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
