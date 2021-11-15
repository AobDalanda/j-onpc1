import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CreateUserComponent } from './Utilisateurs/create-user/create-user.component';
import { FindUserComponent } from './Utilisateurs/find-user/find-user.component';
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
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { ListeUserComponent } from './Utilisateurs/liste-user/liste-user.component';
import {MatTableModule} from "@angular/material/table";
import {UpdateUserComponent} from "./Utilisateurs/update-user/update-user.component";
import {DialogOverviewExampleDialog} from "./create-etablissement/Contacts/DialogOverviewContact";
import {MatDialogModule} from "@angular/material/dialog";
import {DialogOverviewOP} from "./create-etablissement/OrdresParticipations/DialogOverviewOP";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateUserComponent,
    FindUserComponent,
    AccueilComponent,
    CreateEtablissementComponent,
    FourOhFourComponent,
    ListeUserComponent,

    UpdateUserComponent,
    DialogOverviewExampleDialog,

    DialogOverviewOP,
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
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatDialogModule,
  ],
  providers: [ MatInputModule, {
      provide: STEPPER_GLOBAL_OPTIONS,   useValue: { displayDefaultIndicatorType: false, showError: false  }
    }  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
