import {Component, Inject, OnInit} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {OpDialogue} from "../../Model/ExtraData/ordresParticipation.model";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Delegue} from "../../Model/ExtraData/delegue.model";
import {Produit} from "../../Model/ExtraData/produit.model";
import {ExtradataService} from "../../service/extradata/extradata.service";

@Component({
  selector: 'dialog-overview-OP-dialog',
  templateUrl: 'dialog-overview-OP-dialog.html',
})
export class DialogOverviewOP implements  OnInit{
  listeProduits!: Produit[];
  selectedproductId!:number;
  productprice!:number;
  /*
  emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
  ]);
  */

  orderForm!: FormGroup;
  items!: FormArray;
  // On injecte une instance de FormBuilder en dépendance de notre component




  constructor(public dialogRef1: MatDialogRef<DialogOverviewOP>,private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public dataOp: OpDialogue, private extraDataService:ExtradataService) {}

  // Permet de récupérer formData dans la vue qui est une instance de FormArray
  get formData() {
    return <FormArray>this.orderForm.get('items');
  }

  ngOnInit() {
            /**  Retrieve data for "products"*/
            this.extraDataService.ListeProduct().subscribe(
              (listedesproduits)=>{  this.listeProduits=listedesproduits;  }  );

    this.orderForm = this.formBuilder.group({
      NumOp: [],
      description: [],
      etat: [],
      dateSouscription: [],
      facturation:[],
      commentaire: [],
      remiseDelegue: [],
      remiseDirection: [],
      items: this.formBuilder.array([this.createItem()]),
      /*
       * Ci-dessus: la clé items aura en valeur un array de formulaires que l'on génère à la volée
       * grâce à la méthode formbuilder.array() d'Angular
       * qui prend en param la méthode createItem() que nous définissons plus bas
       */
    });

  }

  // Permet de créer un reactiveForm à la volée
  createItem(): FormGroup {
    return this.formBuilder.group({
      prods:'',
      qte: '',
      price: '',
    });
  }
  // Au clic de l'utilisateur sur le bouton "Ajouter une ligne"
  addItem(): void {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }


  // A la soumission du formulaire
  submitForm(formdata:any) {
    console.log(formdata);
  }

  // Au clic de l'utilisateur sur le bouton "X" pour supprimer une ligne
  deleteItemLine(i:number): void {
    //e.preventDefault();
    this.items = this.orderForm.get('items') as FormArray;
    console.log(this.items);
    this.items.removeAt(i);
  }


/*
  onNoClick(): void {
    this.dialogRef1.close();
  }
*/
  selectproductid(i:number){
    this.items = this.orderForm.get('items') as FormArray;
    console.log( this.items.value[i]['prods']);
  }

}
