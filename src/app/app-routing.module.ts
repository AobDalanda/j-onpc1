import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {CreateUserComponent} from "./Utilisateurs/create-user/create-user.component";
import {FindUserComponent} from "./Utilisateurs/find-user/find-user.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {AuthGuard} from "./guards/auth.guard";
import {CreateEtablissementComponent} from "./create-etablissement/create-etablissement.component";
import {FourOhFourComponent} from "./four-oh-four/four-oh-four.component";
import {ListeUserComponent} from "./Utilisateurs/liste-user/liste-user.component";

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'Accueil', component:AccueilComponent, canActivate:[AuthGuard]},
  {path:'CreationFicheEtablissement', component:CreateEtablissementComponent, canActivate:[AuthGuard]},
  {path:'CreateUser', component:CreateUserComponent, canActivate:[AuthGuard]},
  {path: 'FindUser', component:FindUserComponent, canActivate:[AuthGuard]},
  {path: 'listeUser', component: ListeUserComponent, canActivate:[AuthGuard]},
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
