import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {CreateUserComponent} from "./create-user/create-user.component";
import {FindUserComponent} from "./find-user/find-user.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'Accueil', component:AccueilComponent, canActivate:[AuthGuard]},
  {path:'CreateUser', component:CreateUserComponent, canActivate:[AuthGuard]},
  {path: 'FindUser', component:FindUserComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
