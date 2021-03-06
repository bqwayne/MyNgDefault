import { Routes } from '@angular/router';
import { AdminComponent } from './admin';
import { HomeComponent } from './home';
import {  PartnersComponent, PartnersTypesComponent, PartnersTiersComponent, 
          ProgramMgmtComponent, CompetenciesComponent, CompetencyLevelsComponent, 
          PartnersListComponent, PartnerDetailsComponent } from './partners';
import { LoginPageComponent } from './login-page';
import { RegistrationPageModule } from './registration-page';
import { MessagePageComponent } from './message-page';
import { DataIoComponent } from './data-io'
//import { AboutComponent } from './about';
//import { BillComponent } from './bill';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'login', component: LoginPageComponent},
  { path: 'logout', component: LoginPageComponent},
  { path: 'register', component: RegistrationPageModule},
  { path: 'messages', component: MessagePageComponent},
  { path: 'about', component: HomeComponent },
  { path: 'bill',  component: HomeComponent },
  { path: 'partners',  component: PartnersComponent },
  { path: 'program-mgmt', component: ProgramMgmtComponent},
  { path: 'partner-types',  component: PartnersTypesComponent },
  { path: 'partner-tiers',  component: PartnersTiersComponent },
  { path: 'competencies', component: CompetenciesComponent},
  { path: 'competency-levels', component: CompetencyLevelsComponent},
  { path: 'partner-list',  component: PartnersListComponent},
  { path: 'partner-details/:id', component: PartnerDetailsComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'data-io', component: DataIoComponent}
];