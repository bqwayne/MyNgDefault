import { Routes } from '@angular/router';
import { AdminComponent } from './admin';
import { HomeComponent } from './home';
import { PartnersComponent, PartnersTypesComponent } from './partners';
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
  { path: 'register', component: RegistrationPageModule},
  { path: 'messages', component: MessagePageComponent},
  { path: 'about', component: HomeComponent },
  { path: 'bill',  component: HomeComponent },
  { path: 'partners',  component: PartnersComponent },
  { path: 'partner-types',  component: PartnersTypesComponent },
  { path: 'partner-list',  component: HomeComponent },
  { path: 'admin', component: AdminComponent},
  { path: 'data-io', component: DataIoComponent}
];