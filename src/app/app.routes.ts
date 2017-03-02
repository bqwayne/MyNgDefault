import { Routes } from '@angular/router';
import { AdminComponent } from './admin';
import { HomeComponent } from './home';
import { LoginPageComponent } from './login-page';
import { DataIoComponent } from './data-io'
//import { AboutComponent } from './about';
//import { BillComponent } from './bill';
//import { PartnerComponent, PartnerTypesComponent, PartnerListComponent } from './partner';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'login', component: LoginPageComponent},
  { path: 'about', component: HomeComponent },
  { path: 'bill',  component: HomeComponent },
  { path: 'partner',  component: HomeComponent },
  { path: 'partner-types',  component: HomeComponent },
  { path: 'partner-list',  component: HomeComponent },
  { path: 'admin', component: AdminComponent},
  { path: 'data-io', component: DataIoComponent}
];