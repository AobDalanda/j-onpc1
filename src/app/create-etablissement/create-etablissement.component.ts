import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
import {HttpClient} from "@angular/common/http";
import {DatePipe, formatDate} from "@angular/common";

interface listeTypeDptandEtablishment {
  value: string;
  viewValue: string;
}
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
  /**
   * Liste type d'etablissement
   */
  typeEta: listeTypeDptandEtablishment[] = [
    {value: '1', viewValue: 'Etablissement'},
    {value: '2', viewValue: 'Organisme'},
    {value: '3', viewValue: 'Internat'},
    {value: '4', viewValue: 'Fournisseur'},
    {value: '5', viewValue: 'Groupes scolaires'},
  ];
  isLinear = true;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  formcontactGroup!: FormGroup;
/*Array for retrieved data from api    */
  li:any;
  listeDelegue:any;
  listeDioces:any;
  listeDptmt:any;
  listeTypeEtabl:any;
  constructor(private _formBuilder: FormBuilder, private http:HttpClient ) {
  }

  ngOnInit() {
    /**
     * Retrieve data for "source de mise à jour "
                         */
                        this.http.get('http://localhost/ONPC/public/extract/sourcemaj')
                          .subscribe(Response => {
                            if(Response){
                              this.li=Response;
                            }
                          });
     /**
     * Retrieve data for "delegues"
     */
                  this.http.get('http://localhost/ONPC/public/liste/delegues')
                    .subscribe(Response => {
                      if(Response){
                        this.listeDelegue=Response;
                      }
                    });
/**
     * Retrieve data for "diocese"
     */
                  this.http.get('http://localhost/ONPC/public/extract/diocese')
                    .subscribe(Response => {
                      if(Response){
                        this.listeDioces=Response;
                      }
                    });
      /**
      * Retrieve data for departement
      */
                  this.http.get('http://localhost/ONPC/public/extract/dptmt')
                    .subscribe(Response => {
                      if(Response){
                        this.listeDptmt=Response;
                      }
                    });
    /**
     * Retrieve data for type etablissement
     */
                  this.http.get('http://localhost/ONPC/public/extract/typeetabl')
                    .subscribe(Response => {
                      if(Response){
                        this.listeTypeEtabl=Response;
                      }
                    });
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
                  rubriqueprincipale: ['',Validators.required],
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
