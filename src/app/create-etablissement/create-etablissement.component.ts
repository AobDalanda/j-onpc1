import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
import {HttpClient} from "@angular/common/http";
import {DatePipe, formatDate} from "@angular/common";
import {ExtradataService} from "../service/extradata/extradata.service";
import {Delegue} from "../Model/ExtraData/delegue.model";
import {Diocese} from "../Model/ExtraData/diocese.model";
import {Smaj} from "../Model/ExtraData/smaj.model";
import {Dptmts} from "../Model/ExtraData/dptmt.model";
import {TypeEtablissement} from "../Model/ExtraData/typeEtablissement.model";

@Component({
  selector: 'cf-create-etablissement',
  templateUrl: './create-etablissement.component.html',
  styleUrls: ['./create-etablissement.component.css']
})
export class CreateEtablissementComponent implements OnInit {
  date = new FormControl(new Date());

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  isLinear = true;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  formcontactGroup!: FormGroup;
/*Array for retrieved data from api    */
  liSourceMaj!:Smaj[];
  listeDelegue!: Delegue[];
  listeDioces !: Diocese[];
  listeDptmt!: Dptmts[];
  listeTypeEtabl !:TypeEtablissement[] ;
  constructor(private _formBuilder: FormBuilder, private http:HttpClient, private extraDataService: ExtradataService ) {
  }

  ngOnInit() {
                  /**  Retrieve data for "source de mise à jour " */
                                this.extraDataService.SMajData().subscribe(
                                  (sMaj)=>{  this.liSourceMaj=sMaj;  },(error)=>{
                                    alert("Connexion impossible au serveur de données");   }  );
                 /**  Retrieve data for "delegues" */
                               this.extraDataService.ListeDelegue().subscribe(
                                 (listedelegue)=>{  this.listeDelegue=listedelegue;  }  );
                 /** Retrieve data for Diocese */
                               this.extraDataService.ListeDiocese().subscribe(
                                 (ListeDiocese)=>{this.listeDioces=ListeDiocese;}
                               );
                /** Retrieve data for department */
                              this.extraDataService.ListeDptmt().subscribe(
                                (ListeDptmt)=>{this.listeDptmt=ListeDptmt
                                }
                              );
               /** Retrieve data for type Etablissement */
                             this.extraDataService.ListeTypeEtablissment().subscribe(
                               (ListeTypeEtabl)=>{this.listeTypeEtabl=ListeTypeEtabl;}
                             );
    /**
     * formulaire "departement et type etablissement"
     */
          this.firstFormGroup = this._formBuilder.group({
            /**
             * champs obligatoires
             */
                department: ['', Validators.required],
                typeEtablissement: ['', Validators.required]
          });
          /**
           * formulaire coordonnées
           */
          this.secondFormGroup = this._formBuilder.group({
                  exportweb: ['oui', Validators.required],
                  presencepapier: ['oui', Validators.required],
                  optionprint:['oui', Validators.required],
                  presenceweb: ['oui', Validators.required],
                  presencegratuite: ['non', Validators.required],
                  SourceMaj: ['sans', Validators.required],
                  dateDerniereModif: [formatDate(new Date(), 'dd/MM/yyyy', 'en'), Validators.required],
                  dateDEnvoiMailMAj: [''],
                  dateRetour: [''],
                  mailGestionEdito1: [''],
                  mailGestionEdito2: [''],
                  horsSecteur:  ['non', Validators.required],
                  delegue: ['Non rattaché',Validators.required],
                  typeenseignementprive: ['Laique',Validators.required],
                  /*rubriqueprincipale: ['',Validators.required], */
                  typeetablissement1  : [1,Validators.required],
                  formation  : ['classique',Validators.required],
                  sigle  : [''],
                  denomination  : ['',Validators.required],
                  extensiondenomination  : [''],
                  denominationabregee  : [''],
                  adresse1 : [''],
                  adresse2: [''],
                  adresse3 : [''],
                  codepostal : [''],
                  ville : ['',Validators.required],
                  pays : [''],
                  gestionCoordonneesGps : ['automatique', Validators.required],
                  latitude : ['0.0000000'],
                  longitude : ['0.0000000'],
                  telephone : [''],
                  fax : [''],
                  mail : [''],
                  autremailExtranet : [''],
                  web : [''],
                  facebook : [''],
                  nbreEleve : [''],
                  faxing : ['oui', Validators.required],
                  mailing : ['oui', Validators.required],
                  diocese : [102, Validators.required],
                  adressepostal1 : [''],
                  adressepostal2 : [''],
                  adressepostal3 : [''],
                  adressepostal4 : [''],
                  adressepostal5 : [''],
                  adressepostal6 : [''],
                  adressepostal7 : [''],

          });//from line 355 in html
          this.formcontactGroup= this._formBuilder.group({
            //https://stackblitz.com/angular/dynvydqgbql?file=app%2Fautocomplete-overview-example.html
            //https://stackblitz.com/angular/delolgypoaq?file=app%2Ftable-sticky-header-example.ts
                 contactCivilite: [''],
                 contactPrenom: ['', Validators.required],
                 contactNom: ['', Validators.required],
                 contactFonction: [''],
                 contactSignataire: ['oui',Validators.required],
                 contactMail: ['',Validators.required],
                 contactTelephone: [''],
                 contactInfo: [''],
          });
  }


  submit() {
    console.log(this.firstFormGroup.value);
    console.log(this.secondFormGroup.value);
    console.log(this.formcontactGroup.value);
  }
}
