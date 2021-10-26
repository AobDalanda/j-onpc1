import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import { CreateUserComponent } from './create-user/create-user.component';
import { FindUserComponent } from './find-user/find-user.component';
import { AccueilComponent } from './accueil/accueil.component';
import {HttpClientModule} from "@angular/common/http";
import { CreateEtablissementComponent } from './create-etablissement/create-etablissement.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateUserComponent,
    FindUserComponent,
    AccueilComponent,
    CreateEtablissementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
