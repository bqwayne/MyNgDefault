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
import { ITopbarActionsComponent, ISideBarItemComponent, NavigationDataService, TopBarNavigationSettingsComponent } from './admin/settings/navigation';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    NavTopbarComponent,
    NavTopbarActionComponent,
    NavSidebarListComponent,
    NavSidebarListItemComponent,
    TopBarNavigationSettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules}),
    MaterialModule
  ],
  providers: [NavigationDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
