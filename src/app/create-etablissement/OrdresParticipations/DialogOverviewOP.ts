import {Component, Inject, OnInit} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {OpDialogue} from "../../Model/ExtraData/ordresParticipation.model";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Delegue} from "../../Model/ExtraData/delegue.model";
import {Produit} from "../../Model/ExtraData/produit.model";
import {ExtradataService} from "../../service/extradata/extradata.service";
import {formatNumber} from "@angular/common";

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
  product!: FormArray;
  // On injecte une instance de FormBuilder en dépendance de notre component




  constructor(public dialogRef1: MatDialogRef<DialogOverviewOP>,private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public dataOp: OpDialogue, private extraDataService:ExtradataService) {}

  // Permet de récupérer formData dans la vue qui est une instance de FormArray
  get formData() {
    return <FormArray>this.orderForm.get('product');
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
            remiseDelegue: [0.00],
            remiseDirection:[0.00],
            montant:[0.00],
            Facturable:[0.00],
            product: this.formBuilder.array([this.createItem()]),
          });

  }



  // Permet de créer un reactiveForm à la volée
  createItem(): FormGroup {
    return this.formBuilder.group({
      prods:0,
      qte: 1,
      price:0.00,
    });
  }
  // Au clic de l'utilisateur sur le bouton "Ajouter une ligne"
  addItem(): void {
          this.product = this.orderForm.get('product') as FormArray;
          this.product.push(this.createItem());
         this.getTotalPrice();
  }


  // A la soumission du formulaire
  submitForm(formdata:any) {
    console.log(formdata);
  }

  // Au clic de l'utilisateur sur le bouton "X" pour supprimer une ligne
  deleteItemLine(i:number): void {
    //e.preventDefault();
    this.product = this.orderForm.get('product') as FormArray;
    console.log(this.product);
    this.product.removeAt(i);
  }


  selectproductid(i:number){
          this.product = this.orderForm.get('product') as FormArray;
          const otheFormField=this.orderForm as FormGroup;
          const orderForm=this.product.at(i) as FormGroup;
      // @ts-ignore
          const price =this.listeProduits.find(e=>e.id===Number(this.product.value[i]['prods']))['Prix'];
          orderForm.get('price')?.patchValue(price);
          const qtity=orderForm.get('qte')?.value;
          otheFormField.get('montant')?.patchValue(price * qtity);
           /*
           const mont=this.orderForm.get('montant')?.value;
           console.log('amount '+mont);
           this.orderForm.get('montant')?.value.patchValue(price * quantity);
            const mont1=this.orderForm.get('montant')?.value;
            console.log('amount 1'+mont1);
            */
  }

  getTotalPrice():any{
    this.product = this.orderForm.get('product') as FormArray;
    const otheFormField=this.orderForm as FormGroup;
    let items = this.product.value;
    let total=0;
    for(let sid of items)
    {
      const totalyse =sid.qte * sid.price;
      total+=parseFloat(totalyse);
    }
    /*
    if(!isNaN(total)) {
      return total.toFixed(2);
    }
    */
    otheFormField.get('montant')?.patchValue(total.toFixed(2));
  }




}
