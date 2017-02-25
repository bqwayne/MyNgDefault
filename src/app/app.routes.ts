import { Routes } from '@angular/router';
import { HomeComponent } from './home';
//import { AboutComponent } from './about';
//import { BillComponent } from './bill';
//import { PartnerComponent, PartnerTypesComponent, PartnerListComponent } from './partner';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: HomeComponent },
  { path: 'bill',  component: HomeComponent },
  { path: 'partner',  component: HomeComponent },
  { path: 'partner-types',  component: HomeComponent },
  { path: 'partner-list',  component: HomeComponent },
];