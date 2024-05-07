import { Routes } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';



 export const routes: Routes = [
     {path :'',component :AccueilComponent},
    { path: 'accueil', component: AccueilComponent },
    { path: 'inscription', component: InscriptionComponent },
    // { path: '', redirectTo: 'accueil', pathMatch: 'full' },
    {path :'about-us',component:AboutUsComponent},
    {path:'**',component:NotFoundComponent}
  ];