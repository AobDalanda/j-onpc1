import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
import {HttpClient} from "@angular/common/http";
import {formatDate} from "@angular/common";
import {ExtradataService} from "../service/extradata/extradata.service";
import {Delegue} from "../Model/ExtraData/delegue.model";
import {Diocese} from "../Model/ExtraData/diocese.model";
import {Smaj} from "../Model/ExtraData/smaj.model";
import {Dptmts} from "../Model/ExtraData/dptmt.model";
import {TypeEtablissement} from "../Model/ExtraData/typeEtablissement.model";
import {MatDialog} from "@angular/material/dialog";
import {DialogOverviewExampleDialog} from "./Contacts/DialogOverviewContact";
import {DialogOverviewOP} from "./OrdresParticipations/DialogOverviewOP";
import {ContactDialogue} from "../Model/ExtraData/DialogData";
import {OpDialogue} from "../Model/ExtraData/ordresParticipation.model";
import {DialogOverviewInsertion} from "./Insertion/DialogOverviewInsertion";
import {InsertionDialogue} from "../Model/ExtraData/insertionData";


@Component({
  selector: 'cf-create-etablissement',
  templateUrl: './create-etablissement.component.html',
  styleUrls: ['./create-etablissement.component.css']
})
export class CreateEtablissementComponent implements OnInit {

  prenom!: string;
  nom!:string;
  fonction!:string;
  civilite!:string;
  sample  : ContactDialogue[]= [];
  OpData:OpDialogue[]=[];
  insertionData:InsertionDialogue[]=[];
  date = new FormControl(new Date());
  /*
  displayedColumns = ['Prenom', 'Nom', 'Fonction','Signataire'];
  displayedColumnsOP = ['N°OP', 'Date', 'Facturable','Etat','Facturation'];
*/
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  isLinear = true;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
/*Array for retrieved data from api    */
  liSourceMaj!:Smaj[];
  listeDelegue!: Delegue[];
  listeDioces !: Diocese[];
  listeDptmt!: Dptmts[];
  listeTypeEtabl !:TypeEtablissement[] ;



  constructor(private _formBuilder: FormBuilder, private http:HttpClient, private extraDataService: ExtradataService, public dialog: MatDialog ) {
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
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '50%',
       data : { civilite:this.civilite, prenom: this.prenom,  nom:this.nom}
    });

    dialogRef.afterClosed().subscribe((result:ContactDialogue) => {
      console.log(result);
      this.sample.push(result);
      console.log(this.sample);
    });
  }

  openDialogOp(): void {
    const dialogRef1 = this.dialog.open(DialogOverviewOP, {
      width: '50%',
      data: { identifiant:this.nom, etat:this.prenom, dateSouscription: this.date, nom:this.prenom }
    });

    dialogRef1.afterClosed().subscribe((result1:OpDialogue) => {
      console.log(result1);
      this.OpData.push(result1);
       console.log(this.OpData);
    });
  }
  openDialoginsert(): void {
    const dialogRef2 = this.dialog.open(DialogOverviewInsertion, {
      width: '50%',
      data: { identifiant:this.nom, etat:this.prenom, dateSouscription: this.date, nom:this.prenom }
    });

    dialogRef2.afterClosed().subscribe((result2:InsertionDialogue) => {
      console.log(result2);
      result2.type="publicité";
      result2.optionprint="indeterminé";
      result2.actif="Oui";
      this.insertionData.push(result2);
       console.log(this.insertionData);
    });
  }


  submit() {
    console.log(  this.firstFormGroup);
    console.log( JSON.stringify(this.secondFormGroup, null, "    "));
    console.log("contact :"+ JSON.stringify(this.sample, null, "    "));
    console.log("OP :"+ JSON.stringify(this.OpData, null, "    "));
    console.log("OP :"+ JSON.stringify(this.insertionData, null, "    "));
    //console.log("%s %O", "My Object", this.OpData);

  }

  deleteContact(indexOfelement: number) {
    alert(indexOfelement);
    this.sample.splice(indexOfelement,1);
  }


}




