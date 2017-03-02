import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import 'hammerjs';

import { ROUTES } from './app.routes';
import { firebaseConfig } from './app.firebase';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page';
import { RegistrationPageModule } from './registration-page';
import { MessagePageComponent } from './message-page';
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
import { DialogComponent, DialogDisplayComponent, ActionTypeDirective, AppMenuComponent, AuthFire } from './shared';
import { DataIoComponent, DataIoService, DataIoFormComponent } from './data-io';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    LoginPageComponent,
    RegistrationPageModule,
    MessagePageComponent,
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
    ActionTypeDirective,
    DataIoComponent,
    DataIoFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules}),
    MaterialModule
  ],
  entryComponents: [
    SideBarItemDialog,
    DialogDisplayComponent,
    RouteTypesComponent
  ],
  providers: [NavigationDataService, ConfigDefaultsService, MenuItemService, DataIoService, AuthFire],
  bootstrap: [AppComponent]
})
export class AppModule { }
