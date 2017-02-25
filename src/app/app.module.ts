import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, PreloadAllModules } from '@angular/router';

import 'hammerjs';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { NavTopbarComponent, NavTopbarActionComponent, NavSidebarListComponent, NavSidebarListItemComponent } from './navigation';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavTopbarComponent,
    NavTopbarActionComponent,
    NavSidebarListComponent,
    NavSidebarListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules}),
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
