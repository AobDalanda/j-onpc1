import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CreateUserComponent } from './create-user/create-user.component';
import { FindUserComponent } from './find-user/find-user.component';
import { AccueilComponent } from './accueil/accueil.component';
import {HttpClientModule} from "@angular/common/http";
import { CreateEtablissementComponent } from './create-etablissement/create-etablissement.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from "@angular/material/stepper";
import {MatIconModule} from "@angular/material/icon";

import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {MatSelectModule} from "@angular/material/select";

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
    HttpClientModule,
    BrowserAnimationsModule,

    MatStepperModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSelectModule
  ],
  providers: [  {
      provide: STEPPER_GLOBAL_OPTIONS,   useValue: { displayDefaultIndicatorType: false, showError: true  }
    }  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
