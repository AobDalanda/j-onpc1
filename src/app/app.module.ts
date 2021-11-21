import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {FourOhFourComponent} from './four-oh-four/four-oh-four.component';
import {ListeUserComponent} from './Utilisateurs/liste-user/liste-user.component';
import {MatTableModule} from "@angular/material/table";
import {UpdateUserComponent} from "./Utilisateurs/update-user/update-user.component";
import {DialogOverviewExampleDialog} from "./create-etablissement/Contacts/DialogOverviewContact";
import {MatDialogModule} from "@angular/material/dialog";
import {DialogOverviewOP} from "./create-etablissement/OrdresParticipations/DialogOverviewOP";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./login/login.component";
import {CreateUserComponent} from "./Utilisateurs/create-user/create-user.component";
import {FindUserComponent} from "./Utilisateurs/find-user/find-user.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {CreateEtablissementComponent} from "./create-etablissement/create-etablissement.component";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {STEPPER_GLOBAL_OPTIONS} from "@angular/cdk/stepper";
import {MatIconModule} from "@angular/material/icon";
import {MatStepperModule} from "@angular/material/stepper";
import {AppRoutingModule} from "./app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {DialogOverviewInsertion} from "./create-etablissement/Insertion/DialogOverviewInsertion";

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
    DialogOverviewInsertion,
    DialogOverviewOP,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
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
